const vocabulary = [
  { name:"seaweed", art:`<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="sw" x2="0" y2="1"><stop stop-color="#62df91"/><stop offset="1" stop-color="#08774c"/></linearGradient></defs><ellipse cx="100" cy="125" rx="67" ry="9" fill="#c9a36d"/><g fill="none" stroke="url(#sw)" stroke-width="13" stroke-linecap="round"><path d="M60 124C38 93 72 76 48 38"/><path d="M98 124C75 94 114 72 92 20"/><path d="M133 124c-20-27 19-44 8-85"/><path d="M118 124c14-25-9-38 9-63"/></g></svg>` },
  { name:"fish", art:`<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="fi"><stop stop-color="#ffd260"/><stop offset="1" stop-color="#e88732"/></linearGradient></defs><path d="M152 70l37-29-9 30 9 29-37-25z" fill="#ef8a39"/><path d="M24 70c17-47 100-49 141 0-41 49-124 47-141 0z" fill="url(#fi)"/><path d="M82 31l23-24 20 30M82 108l23 24 20-30" fill="#ef9d3c"/><path d="M68 34q-20 36 0 72M97 26q-19 44 0 88M126 34q-17 36 0 72" fill="none" stroke="#fff2c4" stroke-width="6"/><circle cx="50" cy="59" r="7" fill="#153d51"/></svg>` },
  { name:"coral", art:`<svg viewBox="0 0 200 140" aria-hidden="true"><ellipse cx="100" cy="127" rx="72" ry="8" fill="#c9a36d"/><g fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M93 126V79L68 55V28M69 56L45 44V23M92 88l26-26V32M117 63l26-17V21M94 104l-31 1-17-20M94 74L97 34l-13-17M119 92l24 12 10-20" stroke="#ff786f" stroke-width="13"/><path d="M118 126v-29l20-19M64 126v-25l-17-18" stroke="#d95762" stroke-width="11"/></g></svg>` },
  { name:"sand", art:`<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="sa" x2="0" y2="1"><stop stop-color="#f6daa2"/><stop offset="1" stop-color="#c89559"/></linearGradient></defs><path d="M19 112c22-47 45-25 63-65 11-24 29-25 40 2 13 33 43 21 59 63z" fill="url(#sa)"/><g fill="#8e6544"><circle cx="55" cy="101" r="3"/><circle cx="83" cy="72" r="2"/><circle cx="111" cy="105" r="3"/><circle cx="143" cy="91" r="2"/><circle cx="119" cy="66" r="2"/></g></svg>` },
  { name:"rock", art:`<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="ro" x2=".8" y2="1"><stop stop-color="#9baead"/><stop offset="1" stop-color="#435d62"/></linearGradient></defs><ellipse cx="102" cy="126" rx="78" ry="7" fill="#c49d69"/><path d="M26 119L43 64l36-38 57 12 39 81z" fill="url(#ro)"/><path d="M43 64l51 9 42-35M94 73l16 46M42 99l68 20 64-22" fill="none" stroke="#c1ccc2" stroke-width="5" opacity=".5"/></svg>` },
  { name:"shell", art:`<svg viewBox="0 0 200 140" aria-hidden="true"><defs><radialGradient id="sh"><stop stop-color="#fff5dc"/><stop offset="1" stop-color="#d78f82"/></radialGradient></defs><ellipse cx="100" cy="124" rx="68" ry="7" fill="#b78e64"/><path d="M40 112C31 51 55 17 100 17s69 34 60 95c-27 16-93 16-120 0z" fill="url(#sh)"/><path d="M100 18v100M98 20C70 48 70 82 76 117M94 21C50 42 44 76 52 111M106 21c44 21 50 55 42 90M102 20c28 28 28 62 22 97" fill="none" stroke="#b76e70" stroke-width="5" opacity=".7"/></svg>` },
  { name:"turtle", art:`<svg viewBox="0 0 200 140" aria-hidden="true"><defs><radialGradient id="tu"><stop stop-color="#8ac66f"/><stop offset="1" stop-color="#356e51"/></radialGradient></defs><path d="M47 46L16 30q-9 34 29 42M47 96l-31 16q-9-34 29-42M143 46l30-16q10 34-28 42M143 96l30 16q10-34-28-42" fill="#69a879"/><ellipse cx="100" cy="70" rx="61" ry="45" fill="url(#tu)" stroke="#2e6049" stroke-width="5"/><path d="M64 42l18 20-17 27M136 42l-18 20 17 27M82 62h36l13 28-31 19-31-19z" fill="none" stroke="#bad087" stroke-width="4"/><path d="M158 70c8-20 30-19 37 0-7 19-29 20-37 0z" fill="#78b988"/><circle cx="185" cy="65" r="3" fill="#173e3d"/></svg>` },
  { name:"anemone", art:`<svg viewBox="0 0 200 140" aria-hidden="true"><defs><linearGradient id="an" x2="0" y2="1"><stop stop-color="#ffb167"/><stop offset="1" stop-color="#db4f6f"/></linearGradient></defs><ellipse cx="100" cy="126" rx="69" ry="8" fill="#c19a69"/><path d="M63 123c5-21 18-31 37-31s33 10 38 31z" fill="#9e5670"/><g fill="none" stroke="url(#an)" stroke-width="10" stroke-linecap="round"><path d="M99 97C65 71 75 34 46 20M105 97c31-31 12-57 41-76M91 101C56 93 58 62 29 54M111 101c35-8 33-39 61-47M99 95C80 61 102 40 91 13M105 95c20-32 1-55 14-80M82 103C59 86 77 62 59 43M121 104c23-19 4-42 23-60"/></g></svg>` }
];

const $ = (selector) => document.querySelector(selector);
const screens = [$("#startScreen"), $("#gameScreen"), $("#endScreen")];
let firstCard = null;
let secondCard = null;
let matchedPairs = 0;
let boardLocked = false;
let checkTimer;

function shuffle(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
  }
  return result;
}

function showScreen(activeScreen) {
  screens.forEach((screen) => screen.classList.toggle("active", screen === activeScreen));
}

function createDeck() {
  return shuffle(vocabulary.flatMap((item) => [
    { ...item, type:"picture", id:`${item.name}-picture` },
    { ...item, type:"word", id:`${item.name}-word` }
  ]));
}

function beginGame() {
  clearTimeout(checkTimer);
  firstCard = null;
  secondCard = null;
  matchedPairs = 0;
  boardLocked = false;
  $("#score").textContent = "0";
  $("#pairsCount").textContent = "0";
  $("#scorePill").hidden = false;
  updateStatus("Choose a card");
  $("#cardsGrid").innerHTML = createDeck().map((card) => `
    <button class="memory-card" data-name="${card.name}" data-type="${card.type}" aria-label="Face-down memory card" aria-pressed="false">
      <span class="card-inner">
        <span class="card-face card-back" aria-hidden="true"></span>
        <span class="card-face card-front ${card.type}-card">${card.type === "picture" ? card.art : card.name}</span>
      </span>
    </button>`).join("");
  $("#cardsGrid").querySelectorAll(".memory-card").forEach((card) => card.addEventListener("click", flipCard));
  showScreen($("#gameScreen"));
}

function flipCard(event) {
  const card = event.currentTarget;
  if (boardLocked || card === firstCard || card.classList.contains("matched")) return;
  card.classList.add("flipped");
  card.setAttribute("aria-pressed", "true");
  card.setAttribute("aria-label", `${card.dataset.type} card: ${card.dataset.name}`);
  if (!firstCard) {
    firstCard = card;
    updateStatus("Choose one more card");
    return;
  }
  secondCard = card;
  boardLocked = true;
  checkPair();
}

function checkPair() {
  const isMatch = firstCard.dataset.name === secondCard.dataset.name && firstCard.dataset.type !== secondCard.dataset.type;
  if (isMatch) {
    firstCard.classList.add("matched");
    secondCard.classList.add("matched");
    firstCard.disabled = true;
    secondCard.disabled = true;
    matchedPairs += 1;
    $("#score").textContent = matchedPairs;
    $("#pairsCount").textContent = matchedPairs;
    updateStatus("Great match!", "success");
    playSuccessSound();
    resetTurn();
    if (matchedPairs === vocabulary.length) checkTimer = setTimeout(finishGame, 900);
  } else {
    updateStatus("Try again!", "try");
    checkTimer = setTimeout(() => {
      [firstCard, secondCard].forEach((card) => {
        card.classList.remove("flipped");
        card.setAttribute("aria-pressed", "false");
        card.setAttribute("aria-label", "Face-down memory card");
      });
      resetTurn();
      updateStatus("Choose a card");
    }, 1000);
  }
}

function resetTurn() { firstCard = null; secondCard = null; boardLocked = false; }

function updateStatus(message, className = "") {
  const status = $("#status");
  status.textContent = message;
  status.className = `status ${className}`.trim();
}

function finishGame() {
  $("#scorePill").hidden = true;
  showScreen($("#endScreen"));
}

function playSuccessSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const context = new AudioContext();
  [523.25,659.25,783.99].forEach((frequency,index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const start = context.currentTime + index * .1;
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.0001,start);
    gain.gain.exponentialRampToValueAtTime(.12,start + .02);
    gain.gain.exponentialRampToValueAtTime(.0001,start + .2);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(start);
    oscillator.stop(start + .21);
  });
}

$("#startButton").addEventListener("click", beginGame);
$("#playAgainButton").addEventListener("click", beginGame);
$(".brand").addEventListener("click", (event) => { event.preventDefault(); clearTimeout(checkTimer); $("#scorePill").hidden = true; showScreen($("#startScreen")); });
