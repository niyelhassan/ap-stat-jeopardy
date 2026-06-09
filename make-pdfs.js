#!/usr/bin/env node
// Run: node make-pdfs.js
const { spawn } = require("child_process");
const http = require("http");
const fs = require("fs");
const path = require("path");

const CHROME = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome";
const DIR = __dirname;

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

function startServer(port) {
  const mime = { ".html": "text/html", ".js": "application/javascript", ".css": "text/css" };
  const server = http.createServer((req, res) => {
    const file = path.join(DIR, new URL(req.url, "http://localhost").pathname);
    fs.readFile(file, (err, data) => {
      if (err) { res.writeHead(404); res.end(); return; }
      res.writeHead(200, { "Content-Type": mime[path.extname(file)] || "text/plain" });
      res.end(data);
    });
  });
  return new Promise(r => server.listen(port, r)).then(() => server);
}

function getJSON(url, tries = 15) {
  return new Promise((resolve, reject) => {
    const attempt = () => http.get(url, res => {
      let d = "";
      res.on("data", c => d += c);
      res.on("end", () => { try { resolve(JSON.parse(d)); } catch (e) { reject(e); } });
    }).on("error", () => {
      if (--tries > 0) setTimeout(attempt, 400);
      else reject(new Error("Chrome did not start in time"));
    });
    attempt();
  });
}

async function printToPDF(pageUrl, outputPath) {
  const port = 9200 + Math.floor(Math.random() * 500);
  const chrome = spawn(CHROME, [
    "--headless",
    "--disable-gpu",
    "--no-sandbox",
    "--disable-extensions",
    "--no-first-run",
    `--remote-debugging-port=${port}`,
    pageUrl,
  ], { stdio: "ignore" });

  try {
    // Wait for the page (fonts + rendering) to fully settle
    await sleep(4000);

    const targets = await getJSON(`http://localhost:${port}/json/list`);
    const target = targets.find(t => t.type === "page");
    if (!target) throw new Error("No page target found");

    const ws = new WebSocket(target.webSocketDebuggerUrl);
    await new Promise(r => ws.addEventListener("open", r));

    let id = 1;
    const pending = new Map();
    ws.addEventListener("message", ({ data }) => {
      const msg = JSON.parse(data);
      if (msg.id && pending.has(msg.id)) {
        const cb = pending.get(msg.id);
        pending.delete(msg.id);
        msg.error ? cb.reject(new Error(msg.error.message)) : cb.resolve(msg.result);
      }
    });

    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const i = id++;
      pending.set(i, { resolve, reject });
      ws.send(JSON.stringify({ id: i, method, params }));
    });

    const { data } = await send("Page.printToPDF", {
      displayHeaderFooter: false,
      printBackground: true,
      paperWidth: 8.5,
      paperHeight: 11,
      marginTop: 0.75,
      marginBottom: 0.75,
      marginLeft: 0.75,
      marginRight: 0.75,
    });

    fs.writeFileSync(outputPath, Buffer.from(data, "base64"));
    ws.close();
  } finally {
    chrome.kill();
    await sleep(200);
  }
}

(async () => {
  const server = await startServer(7654);
  const base = "http://localhost:7654/problems.html";
  try {
    process.stdout.write("round1.pdf... ");
    await printToPDF(`${base}?r=1`, path.join(DIR, "round1.pdf"));
    console.log("done");

    process.stdout.write("round2.pdf... ");
    await printToPDF(`${base}?r=2`, path.join(DIR, "round2.pdf"));
    console.log("done");
  } finally {
    server.close();
  }
})().catch(e => { console.error(e.message); process.exit(1); });
