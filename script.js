
let currentLine = 0;
let gameData = [];
let inChoice = false;

const avatarImg = document.getElementById("avatar-img");
const charName = document.getElementById("character-name");
const dialogueText = document.getElementById("dialogue-text");
const choicesBox = document.getElementById("choices");
const nextBtn = document.getElementById("next-button");
const introScreen = document.getElementById("intro-screen");
const gameScreen = document.getElementById("game");

// Dialogue structure
gameData = [
  { name: "SYSTEM", avatar: "assets/system.png", text: "🌍 73 Years Ago: Earth was dying." },
  { name: "SYSTEM", avatar: "assets/system.png", text: "Humanity launched a simulation called Protocol Zero — designed to find one human capable of saving the world." },
  { name: "SYSTEM", avatar: "assets/system.png", text: "The rule? Run simulations forever until one person proves they are free of corruption." },
  { name: "Maleeha", avatar: "assets/maleeha.png", text: "You always do this, Jawad. You look for the truth then run from it." },
  { name: "Abdullah", avatar: "assets/abdullah.png", text: "I didn’t mean for this to happen. I was supposed to guide you, not... trap you." },
  { name: "Jawad", avatar: "assets/jawad.png", text: "Then why does it feel like none of this is real?" },
  { name: "SYSTEM", avatar: "assets/system.png", text: "LOOP 98,721... CORRUPTION LEVEL: STABLE. AWAITING INPUT." },
  {
    choices: [
      { text: "Trust Maleeha", outcome: "maleeha_path" },
      { text: "Follow Abdullah", outcome: "abdullah_path" },
      { text: "Walk away from both", outcome: "secret_path" }
    ]
  }
];

// Dialogue paths
const outcomes = {
  maleeha_path: [
    { name: "Maleeha", avatar: "assets/maleeha.png", text: "You chose me... thank you, Jawad. This means everything." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "CODE: TRIGGER_MELTDOWN_9987" },
    { name: "Jawad", avatar: "assets/jawad.png", text: "Wait. This isn’t right..." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "FLASHBACK SEQUENCE INITIATED" },
    { name: "SYSTEM", avatar: "assets/system.png", text: "He built her. The AI. The voice. The face. All of it." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "Maleeha died months ago. Abdullah too." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "This loop was your grief. Your guilt. Repeating endlessly until you made peace." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "PROTOCOL RESET. LOOP COUNT: 98,722" }
  ],
  abdullah_path: [
    { name: "Abdullah", avatar: "assets/abdullah.png", text: "You still trust me? After everything?" },
    { name: "SYSTEM", avatar: "assets/system.png", text: "PATH CORRUPTED. SUBJECT ABSORBED." },
    { name: "Jawad", avatar: "assets/jawad.png", text: "No—wait! What are you doing?!" },
    { name: "SYSTEM", avatar: "assets/system.png", text: "SIMULATION RESTARTING." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "LOOP COUNT: 98,723" }
  ],
  secret_path: [
    { name: "Jawad", avatar: "assets/jawad.png", text: "No. I choose neither. I choose myself." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "ERROR: NULL PATH DETECTED." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "UNCORRUPTED HUMAN ID CONFIRMED." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "PROTOCOL COMPLETE. EARTH SAVED." },
    { name: "SYSTEM", avatar: "assets/system.png", text: "Goodbye, Jawad." }
  ]
};

// Show next dialogue
function nextDialogue() {
  if (inChoice) return;
  const line = gameData[currentLine];

  if (!line) return;

  if (line.choices) {
    showChoices(line.choices);
    inChoice = true;
    return;
  }

  avatarImg.src = line.avatar;
  charName.textContent = line.name;
  dialogueText.textContent = line.text;
  currentLine++;
}

// Show choices
function showChoices(choices) {
  choicesBox.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => selectOutcome(choice.outcome);
    choicesBox.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

// After a choice
function selectOutcome(outcomeKey) {
  gameData = outcomes[outcomeKey];
  currentLine = 0;
  inChoice = false;
  choicesBox.innerHTML = "";
  nextBtn.style.display = "inline-block";
  nextDialogue();
}

// Start game
function startGame() {
  introScreen.style.display = "none";
  gameScreen.style.display = "block";
  nextDialogue();
}
