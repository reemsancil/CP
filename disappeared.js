const vocabulary = [
  { name: "seaweed", art: `<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="g1" x2="0" y2="1"><stop stop-color="#62df91"/><stop offset="1" stop-color="#08774c"/></linearGradient></defs><ellipse cx="100" cy="125" rx="67" ry="9" fill="#c9a36d"/><g fill="none" stroke="url(#g1)" stroke-width="13" stroke-linecap="round"><path d="M60 124C38 93 72 76 48 38"/><path d="M98 124C75 94 114 72 92 20"/><path d="M133 124c-20-27 19-44 8-85"/><path d="M118 124c14-25-9-38 9-63"/></g><g fill="#48b977"><ellipse cx="49" cy="55" rx="16" ry="7" transform="rotate(55 49 55)"/><ellipse cx="89" cy="47" rx="18" ry="7" transform="rotate(-55 89 47)"/><ellipse cx="143" cy="66" rx="17" ry="7" transform="rotate(55 143 66)"/></g></svg>` },
  { name: "fish", art: `<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="g2"><stop stop-color="#ffd260"/><stop offset="1" stop-color="#e88732"/></linearGradient></defs><path d="M152 70l37-29-9 30 9 29-37-25z" fill="#ef8a39"/><path d="M24 70c17-47 100-49 141 0-41 49-124 47-141 0z" fill="url(#g2)"/><path d="M82 31l23-24 20 30M82 108l23 24 20-30" fill="#ef9d3c"/><path d="M68 34q-20 36 0 72M97 26q-19 44 0 88M126 34q-17 36 0 72" fill="none" stroke="#f9f1c4" stroke-width="6"/><circle cx="50" cy="59" r="7" fill="#153d51"/><circle cx="48" cy="57" r="2" fill="white"/></svg>` },
  { name: "coral", art: `<svg viewBox="0 0 200 140" aria-hidden="true"><ellipse cx="100" cy="127" rx="72" ry="8" fill="#c9a36d"/><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M93 126V79L68 55V28M69 56L45 44V23M92 88l26-26V32M117 63l26-17V21M94 104l-31 1-17-20M94 74L97 34l-13-17M119 92l24 12 10-20" stroke="#ff786f" stroke-width="13"/><path d="M118 126v-29l20-19M64 126v-25l-17-18" stroke="#d95762" stroke-width="11"/></g></svg>` },
  { name: "sand", art: `<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="g4" x2="0" y2="1"><stop stop-color="#f6daa2"/><stop offset="1" stop-color="#c89559"/></linearGradient></defs><path d="M19 112c22-47 45-25 63-65 11-24 29-25 40 2 13 33 43 21 59 63z" fill="url(#g4)"/><g fill="#9c7149" opacity=".7"><circle cx="55" cy="101" r="3"/><circle cx="83" cy="72" r="2"/><circle cx="111" cy="105" r="3"/><circle cx="143" cy="91" r="2"/><circle cx="119" cy="66" r="2"/><circle cx="78" cy="111" r="2"/></g><path d="M26 116q65-17 148 0" fill="none" stroke="#edd097" stroke-width="5" stroke-linecap="round"/></svg>` },
  { name: "rock", art: `<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="g5" x2=".8" y2="1"><stop stop-color="#8fa5a3"/><stop offset="1" stop-color="#435d62"/></linearGradient></defs><ellipse cx="102" cy="126" rx="78" ry="7" fill="#c49d69"/><path d="M26 119L43 64l36-38 57 12 39 81z" fill="url(#g5)"/><path d="M43 64l51 9 42-35M94 73l16 46M42 99l68 20 64-22" fill="none" stroke="#aab9ad" stroke-width="5" opacity=".5"/><g fill="#72ad76"><circle cx="61" cy="68" r="8"/><circle cx="72" cy="62" r="9"/><circle cx="82" cy="68" r="7"/></g></svg>` },
  { name: "shell", art: `<svg viewBox="0 0 200 140" aria-hidden="true"><defs><radialGradient id="g6"><stop stop-color="#fff5dc"/><stop offset="1" stop-color="#d78f82"/></radialGradient></defs><ellipse cx="100" cy="124" rx="68" ry="7" fill="#b78e64"/><path d="M40 112C31 51 55 17 100 17s69 34 60 95c-27 16-93 16-120 0z" fill="url(#g6)"/><path d="M100 18v100M98 20C70 48 70 82 76 117M94 21C50 42 44 76 52 111M106 21c44 21 50 55 42 90M102 20c28 28 28 62 22 97" fill="none" stroke="#b76e70" stroke-width="5" opacity=".7"/></svg>` },
  { name: "turtle", art: `<svg viewBox="0 0 200 140" aria-hidden="true"><defs><radialGradient id="g7"><stop stop-color="#8ac66f"/><stop offset="1" stop-color="#356e51"/></radialGradient></defs><path d="M47 46L16 30q-9 34 29 42M47 96l-31 16q-9-34 29-42M143 46l30-16q10 34-28 42M143 96l30 16q10-34-28-42" fill="#69a879"/><ellipse cx="100" cy="70" rx="61" ry="45" fill="url(#g7)" stroke="#2e6049" stroke-width="5"/><path d="M64 42l18 20-17 27M136 42l-18 20 17 27M82 62h36l13 28-31 19-31-19z" fill="none" stroke="#bad087" stroke-width="4"/><path d="M158 70c8-20 30-19 37 0-7 19-29 20-37 0z" fill="#78b988"/><circle cx="185" cy="65" r="3" fill="#173e3d"/><path d="M40 64L20 55" stroke="#578d69" stroke-width="7" stroke-linecap="round"/></svg>` },
  { name: "anemone", art: `<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="g8" x2="0" y2="1"><stop stop-color="#ffb167"/><stop offset="1" stop-color="#db4f6f"/></linearGradient></defs><ellipse cx="100" cy="126" rx="69" ry="8" fill="#c19a69"/><path d="M63 123c5-21 18-31 37-31s33 10 38 31z" fill="#9e5670"/><g fill="none" stroke="url(#g8)" stroke-width="10" stroke-linecap="round"><path d="M99 97C65 71 75 34 46 20"/><path d="M105 97c31-31 12-57 41-76"/><path d="M91 101C56 93 58 62 29 54"/><path d="M111 101c35-8 33-39 61-47"/><path d="M99 95C80 61 102 40 91 13"/><path d="M105 95c20-32 1-55 14-80"/><path d="M82 103C59 86 77 62 59 43"/><path d="M121 104c23-19 4-42 23-60"/></g></svg>` }
];

const startScreen = document.querySelector("#startScreen");
const gameScreen = document.querySelector("#gameScreen");
const endScreen = document.querySelector("#endScreen");
const cardsGrid = document.querySelector("#cardsGrid");
const instruction = document.querySelector("#instruction");
const answers = document.querySelector("#answers");
const feedback = document.querySelector("#feedback");
const nextButton = document.querySelector("#nextButton");
const scorePill = document.querySelector("#scorePill");

let round = 0;
let score = 0;
let order = [];
let missingItem;
let phaseTimeout;
let solved = false;

const shuffle = (array) => [...array].sort(() => Math.random() - 0.5);

function showScreen(screen) {
  [startScreen, gameScreen, endScreen].forEach((item) => item.classList.toggle("active", item === screen));
}

function beginGame() {
  clearTimeout(phaseTimeout);
  round = 0;
  score = 0;
  order = shuffle(vocabulary);
  document.querySelector("#score").textContent = "0";
  scorePill.hidden = false;
  showScreen(gameScreen);
  startRound();
}

function startRound() {
  solved = false;
  missingItem = order[round];
  document.querySelector("#roundLabel").textContent = `ROUND ${round + 1} OF 8`;
  document.querySelector("#progressBar").style.width = `${((round + 1) / 8) * 100}%`;
  instruction.textContent = "Look carefully!";
  feedback.textContent = "";
  feedback.className = "feedback";
  answers.hidden = true;
  nextButton.hidden = true;
  renderCards();
  phaseTimeout = setTimeout(closeEyes, 8000);
}

function renderCards(hiddenName = null) {
  cardsGrid.innerHTML = vocabulary.map((item) => `
    <div class="picture-card${item.name === hiddenName ? " missing" : ""}" data-name="${item.name}" aria-label="${item.name === hiddenName ? "Empty space" : item.name}">
      ${item.art}
    </div>`).join("");
}

function closeEyes() {
  instruction.textContent = "Close your eyes!";
  cardsGrid.style.opacity = ".25";
  phaseTimeout = setTimeout(revealQuestion, 1800);
}

function revealQuestion() {
  cardsGrid.style.opacity = "1";
  renderCards(missingItem.name);
  instruction.textContent = "Open your eyes! What disappeared?";
  const wrong = shuffle(vocabulary.filter((item) => item !== missingItem)).slice(0, 2);
  answers.innerHTML = shuffle([missingItem, ...wrong]).map((item) => `<button class="answer-button" data-answer="${item.name}">${item.name}</button>`).join("");
  answers.hidden = false;
  answers.querySelectorAll("button").forEach((button) => button.addEventListener("click", checkAnswer));
}

function checkAnswer(event) {
  if (solved) return;
  if (event.currentTarget.dataset.answer !== missingItem.name) {
    feedback.textContent = "Try again!";
    feedback.className = "feedback try";
    event.currentTarget.disabled = true;
    return;
  }
  solved = true;
  score += 1;
  document.querySelector("#score").textContent = score;
  feedback.textContent = "Great job!";
  feedback.className = "feedback";
  answers.querySelectorAll("button").forEach((button) => { button.disabled = true; });
  const missingCard = cardsGrid.querySelector(`[data-name="${missingItem.name}"]`);
  missingCard.classList.remove("missing");
  missingCard.classList.add("reveal");
  playSuccessSound();
  nextButton.textContent = round === 7 ? "SEE MY SCORE →" : "NEXT ROUND →";
  nextButton.hidden = false;
}

function playSuccessSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  [523.25, 659.25, 783.99].forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001, context.currentTime + index * .11);
    gain.gain.exponentialRampToValueAtTime(.15, context.currentTime + index * .11 + .02);
    gain.gain.exponentialRampToValueAtTime(.0001, context.currentTime + index * .11 + .22);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(context.currentTime + index * .11);
    oscillator.stop(context.currentTime + index * .11 + .23);
  });
}

function nextRound() {
  if (round === 7) {
    document.querySelector("#finalScore").textContent = `${score} / 8`;
    scorePill.hidden = true;
    showScreen(endScreen);
    return;
  }
  round += 1;
  startRound();
}

document.querySelector("#startButton").addEventListener("click", beginGame);
document.querySelector("#playAgainButton").addEventListener("click", beginGame);
nextButton.addEventListener("click", nextRound);
