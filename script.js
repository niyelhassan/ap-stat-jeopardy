const TEAM_COLORS = [
  '#e11d48', // rose
  '#0284c7', // sky
  '#059669', // emerald
  '#7c3aed', // violet
  '#ea580c', // orange
  '#0d9488', // teal
];

let state = {
  round: 1,
  teams: [
    { name: "Team 1", score: 0, color: TEAM_COLORS[0] },
    { name: "Team 2", score: 0, color: TEAM_COLORS[1] },
    { name: "Team 3", score: 0, color: TEAM_COLORS[2] },
  ],
  teamCount: 3,
  used: new Set(),
  current: null,
};

// ── Boot ───────────────────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  renderTeamCountPicker();
  renderTeamNameInputs();
});

// ── Team setup ─────────────────────────────────────────────────────────────
function setTeamCount(n) {
  state.teamCount = n;
  while (state.teams.length < n) {
    const i = state.teams.length;
    state.teams.push({ name: `Team ${i + 1}`, score: 0, color: TEAM_COLORS[i] });
  }
  while (state.teams.length > n) state.teams.pop();
  renderTeamCountPicker();
  renderTeamNameInputs();
}

function renderTeamCountPicker() {
  document.getElementById("teamCountRow").innerHTML = [2, 3, 4, 5, 6].map(n => `
    <button class="count-pill${n === state.teamCount ? " count-pill-active" : ""}" onclick="setTeamCount(${n})">${n}</button>
  `).join("");
}

function renderTeamNameInputs() {
  document.getElementById("teamNameList").innerHTML = state.teams.map((t, i) => `
    <div class="team-name-row">
      <span class="team-swatch" style="background:${t.color}"></span>
      <input class="text-input team-name-input" type="text" value="${t.name.replace(/"/g, "&quot;")}"
             oninput="updateTeamName(${i}, this.value)" maxlength="24" />
    </div>
  `).join("");
}

function updateTeamName(i, val) {
  state.teams[i].name = val || `Team ${i + 1}`;
}

// ── Game start ─────────────────────────────────────────────────────────────
function startGame() {
  document.querySelectorAll(".team-name-input").forEach((input, i) => {
    state.teams[i].name = input.value.trim() || `Team ${i + 1}`;
  });
  state.teams.forEach(t => { t.score = 0; });
  state.used = new Set();
  state.round = 1;
  state.current = null;

  document.getElementById("home").classList.add("hidden");
  document.getElementById("board").classList.remove("hidden");
  renderBoard();
}

function goHome() {
  const count = state.teamCount;
  state = { round: 1, teams: [], teamCount: count, used: new Set(), current: null };
  for (let i = 0; i < count; i++) {
    state.teams.push({ name: `Team ${i + 1}`, score: 0, color: TEAM_COLORS[i] });
  }
  document.getElementById("board").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
  renderTeamCountPicker();
  renderTeamNameInputs();
}

// ── Board ──────────────────────────────────────────────────────────────────
function renderBoard() {
  const rd = gameData[`round${state.round}`];
  const numCats = rd.categories.length;
  const numQs = rd.questions[rd.categories[0]].length;
  const grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = `repeat(${numCats}, 1fr)`;
  grid.style.gridTemplateRows = `auto repeat(${numQs}, 1fr)`;
  grid.innerHTML = "";

  // Row 0: all headers in the same grid row → equal height automatically
  rd.categories.forEach(cat => {
    const header = document.createElement("div");
    header.className = "cat-header";
    header.textContent = cat;
    grid.appendChild(header);
  });

  // Rows 1–N: question cards row by row
  for (let qi = 0; qi < numQs; qi++) {
    rd.categories.forEach(cat => {
      const q = rd.questions[cat][qi];
      const id = `${state.round}-${cat}-${qi}`;
      const used = state.used.has(id);
      const card = document.createElement("button");
      card.className = "q-card" + (used ? " used" : "");
      card.disabled = used;
      card.innerHTML = used ? "" : `<span class="q-dollar">$${q.value}</span>`;
      if (!used) card.onclick = () => openQ(cat, qi);
      grid.appendChild(card);
    });
  }

  renderScoreBar();
  document.getElementById("tab1").classList.toggle("active", state.round === 1);
  document.getElementById("tab2").classList.toggle("active", state.round === 2);
}

function switchRound(n) {
  state.round = n;
  renderBoard();
}

function fmtScore(n) {
  return n < 0 ? `-$${Math.abs(n)}` : `$${n}`;
}

function renderScoreBar() {
  document.getElementById("scoreBar").innerHTML = state.teams.map((t, i) => `
    <div class="score-team" style="background:${t.color}">
      <button class="score-adj" onclick="adjustScore(${i}, -100)" aria-label="−100">−</button>
      <div class="score-info">
        <span class="score-name">${t.name}</span>
        <span class="score-val">${fmtScore(t.score)}</span>
      </div>
      <button class="score-adj" onclick="adjustScore(${i}, 100)" aria-label="+100">+</button>
    </div>`).join("");
}

function adjustScore(i, amount) {
  state.teams[i].score += amount;
  renderScoreBar();
}

// ── Question modal ─────────────────────────────────────────────────────────
function openQ(cat, i) {
  const q = gameData[`round${state.round}`].questions[cat][i];
  state.current = { cat, i, q };

  document.getElementById("qCat").textContent = cat;
  document.getElementById("qVal").textContent = `$${q.value}`;
  document.getElementById("qBody").innerHTML = `<div class="q-text">${formatStatSymbols(q.question)}</div>`;

  openModal("qModal");
}

function closeQ() {
  closeModal("qModal");
  state.current = null;
}

// ── Answer modal ───────────────────────────────────────────────────────────
function showAnswer() {
  document.getElementById("aInfo").textContent = `${state.current.cat} · $${state.current.q.value}`;
  document.getElementById("aBody").innerHTML = `<div class="a-text">${formatStatSymbols(state.current.q.answer)}</div>`;
  renderTeamActions();
  closeModal("qModal");
  openModal("aModal");
}

function renderTeamActions() {
  const val = state.current.q.value;
  document.getElementById("aTeamActions").innerHTML = `
    <div class="team-actions-section team-actions-award">
      <div class="team-actions-label">Award +$${val} to:</div>
      <div class="team-btns">
        ${state.teams.map((t, i) => `
          <button class="btn-team-action btn-award-team"
                  style="background:${t.color}"
                  onclick="awardTo(${i})">${t.name}</button>
        `).join("")}
      </div>
    </div>
    <div class="team-actions-section team-actions-deduct">
      <div class="team-actions-label">Wrong answer −$${val}:</div>
      <div class="team-btns">
        ${state.teams.map((t, i) => `
          <button class="btn-team-action btn-deduct-team"
                  style="border-color:${t.color};color:${t.color}"
                  onclick="deductFrom(${i})">${t.name}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function awardTo(i) {
  state.teams[i].score += state.current.q.value;
  finalize();
}

function deductFrom(i) {
  state.teams[i].score -= state.current.q.value;
  renderScoreBar();
  renderTeamActions();
}

function skipQ() { finalize(); }

function finalize() {
  state.used.add(`${state.round}-${state.current.cat}-${state.current.i}`);
  closeModal("aModal");
  closeModal("sModal");
  state.current = null;
  renderBoard();
}

// ── Solution modal ─────────────────────────────────────────────────────────
function showSol() {
  renderSteps(document.getElementById("sBody"), state.current.q.solution || []);
  openModal("sModal");
}

function closeSol() { closeModal("sModal"); }

function renderSteps(el, steps) {
  el.innerHTML = steps.map(s => {
    if (s.type === "formula")
      return `<div class="step-formula">\\[${s.content}\\]</div>`;
    if (s.type === "bullets")
      return `<ul class="step-bullets">${s.content.map(b => `<li>${formatStatSymbols(b)}</li>`).join("")}</ul>`;
    return `<p class="step-text">${formatStatSymbols(s.content)}</p>`;
  }).join("");
}

// ── Final Jeopardy ─────────────────────────────────────────────────────────
function openFJ() {
  const fj = gameData.finalJeopardy;
  document.getElementById("fjCat").textContent = fj.category;
  document.getElementById("fjBody").innerHTML = formatStatSymbols(fj.question);
  openModal("fjModal");
}

function closeFJ() { closeModal("fjModal"); }

function showFJSol() {
  const el = document.getElementById("fjsBody");
  el.innerHTML = gameData.finalJeopardy.solution.map(part => `
    <div class="sol-part">
      <div class="sol-part-label">${part.label}</div>
      <div class="sol-part-steps">${stepsHTML(part.steps)}</div>
    </div>`).join("");
  openModal("fjsModal");
}

function closeFJSol() { closeModal("fjsModal"); }

function stepsHTML(steps) {
  return steps.map(s => {
    if (s.type === "formula") return `<div class="step-formula">\\[${s.content}\\]</div>`;
    if (s.type === "bullets") return `<ul class="step-bullets">${s.content.map(b => `<li>${formatStatSymbols(b)}</li>`).join("")}</ul>`;
    return `<p class="step-text">${formatStatSymbols(s.content)}</p>`;
  }).join("");
}

// ── Modal helpers ──────────────────────────────────────────────────────────
function openModal(id) {
  const el = document.getElementById(id);
  el.classList.remove("hidden");
  requestAnimationFrame(() => {
    el.classList.add("modal-visible");
  });
}

function closeModal(id) {
  const el = document.getElementById(id);
  el.classList.remove("modal-visible");
  setTimeout(() => el.classList.add("hidden"), 250);
}
