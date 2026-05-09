let state = {
  round: 1,
  teams: [],
  currentTeam: 0,
  used: new Set(),
  current: null,
};

// ── Boot ───────────────────────────────────────────────────────────────────
document.getElementById("teamInput").addEventListener("keydown", e => {
  if (e.key === "Enter") addTeam();
});

// ── Team setup ─────────────────────────────────────────────────────────────
function addTeam() {
  const input = document.getElementById("teamInput");
  const name = input.value.trim();
  if (!name || state.teams.length >= 6) return;
  state.teams.push({ name, score: 0 });
  input.value = "";
  renderTeamList();
}

function removeTeam(i) {
  state.teams.splice(i, 1);
  renderTeamList();
}

function renderTeamList() {
  document.getElementById("teamList").innerHTML = state.teams.map((t, i) => `
    <div class="team-row">
      <span>${t.name}</span>
      <button onclick="removeTeam(${i})">✕</button>
    </div>`).join("");
}

// ── Game start ─────────────────────────────────────────────────────────────
function startGame() {
  if (state.teams.length === 0) state.teams.push({ name: "Player", score: 0 });
  document.getElementById("home").classList.add("hidden");
  document.getElementById("board").classList.remove("hidden");
  renderBoard();
}

function goHome() {
  state = { round: 1, teams: [], currentTeam: 0, used: new Set(), current: null };
  document.getElementById("board").classList.add("hidden");
  document.getElementById("home").classList.remove("hidden");
  document.getElementById("teamList").innerHTML = "";
}

// ── Board ──────────────────────────────────────────────────────────────────
function renderBoard() {
  const rd = gameData[`round${state.round}`];
  const grid = document.getElementById("grid");
  grid.style.gridTemplateColumns = `repeat(${rd.categories.length}, 1fr)`;
  grid.innerHTML = "";

  rd.categories.forEach(cat => {
    const col = document.createElement("div");
    col.className = "board-col";
    col.innerHTML = `<div class="cat-header">${cat}</div>`;

    rd.questions[cat].forEach((q, i) => {
      const id = `${state.round}-${cat}-${i}`;
      const used = state.used.has(id);
      const card = document.createElement("button");
      card.className = "q-card" + (used ? " used" : "");
      card.disabled = used;
      card.innerHTML = used ? "" : `<span class="q-dollar">$${q.value}</span>`;
      if (!used) card.onclick = () => openQ(cat, i);
      col.appendChild(card);
    });

    grid.appendChild(col);
  });

  renderScoreBar();
  document.getElementById("tab1").classList.toggle("active", state.round === 1);
  document.getElementById("tab2").classList.toggle("active", state.round === 2);
}

function switchRound(n) {
  state.round = n;
  renderBoard();
}

function renderScoreBar() {
  document.getElementById("scoreBar").innerHTML = state.teams.map((t, i) => `
    <button class="score-chip ${i === state.currentTeam ? "chip-active" : ""}" onclick="selectTeam(${i})">
      <span class="chip-name">${t.name}</span>
      <span class="chip-score">$${t.score}</span>
    </button>`).join("");
}

function selectTeam(i) {
  state.currentTeam = i;
  renderScoreBar();
}

// ── Question modal ─────────────────────────────────────────────────────────
function openQ(cat, i) {
  const q = gameData[`round${state.round}`].questions[cat][i];
  state.current = { cat, i, q };

  document.getElementById("qCat").textContent = cat;
  document.getElementById("qVal").textContent = `$${q.value}`;
  document.getElementById("qBody").innerHTML = q.question;

  const turn = document.getElementById("qTurn");
  if (state.teams.length > 0) {
    turn.textContent = `${state.teams[state.currentTeam].name}'s turn`;
    turn.classList.remove("hidden");
  } else {
    turn.classList.add("hidden");
  }

  openModal("qModal");
}

function closeQ() {
  closeModal("qModal");
  state.current = null;
}

// ── Answer modal ───────────────────────────────────────────────────────────
function showAnswer() {
  document.getElementById("aBody").textContent = state.current.q.answer;
  closeModal("qModal");
  openModal("aModal");
}

function markCorrect() {
  state.teams[state.currentTeam].score += state.current.q.value;
  finalize();
}

function markWrong() {
  state.teams[state.currentTeam].score -= state.current.q.value;
  nextTeam();
  closeModal("aModal");
  openModal("qModal");
}

function skipQ() { finalize(); }

function finalize() {
  state.used.add(`${state.round}-${state.current.cat}-${state.current.i}`);
  nextTeam();
  closeModal("aModal");
  closeModal("sModal");
  state.current = null;
  renderBoard();
}

function nextTeam() {
  if (state.teams.length > 1)
    state.currentTeam = (state.currentTeam + 1) % state.teams.length;
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
      return `<ul class="step-bullets">${s.content.map(b => `<li>${b}</li>`).join("")}</ul>`;
    return `<p class="step-text">${s.content}</p>`;
  }).join("");
  if (window.MathJax) MathJax.typesetPromise([el]);
}

// ── Final Jeopardy ─────────────────────────────────────────────────────────
function openFJ() {
  const fj = gameData.finalJeopardy;
  document.getElementById("fjCat").textContent = fj.category;
  document.getElementById("fjBody").innerHTML = fj.question;
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
  if (window.MathJax) MathJax.typesetPromise([el]);
  openModal("fjsModal");
}

function closeFJSol() { closeModal("fjsModal"); }

function stepsHTML(steps) {
  return steps.map(s => {
    if (s.type === "formula") return `<div class="step-formula">\\[${s.content}\\]</div>`;
    if (s.type === "bullets") return `<ul class="step-bullets">${s.content.map(b => `<li>${b}</li>`).join("")}</ul>`;
    return `<p class="step-text">${s.content}</p>`;
  }).join("");
}

// ── Modal helpers ──────────────────────────────────────────────────────────
function openModal(id) {
  const el = document.getElementById(id);
  el.classList.remove("hidden");
  requestAnimationFrame(() => {
    el.classList.add("modal-visible");
    if (window.MathJax) MathJax.typeset();
  });
}

function closeModal(id) {
  const el = document.getElementById(id);
  el.classList.remove("modal-visible");
  setTimeout(() => el.classList.add("hidden"), 250);
}
