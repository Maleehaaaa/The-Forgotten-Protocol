
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

// Boot + Glitch + Memory Storm + Final Reboot
gameData = [
  { name: "SYSTEM", avatar: "System.png", text: "🌍 73 Years Ago: Earth was dying." },
  { name: "SYSTEM", avatar: "System.png", text: "Humanity launched a simulation called Protocol Zero — a test that would run forever..." },
  { name: "SYSTEM", avatar: "System.png", text: "Until one human proved they were free of corruption." },
  { name: "SYSTEM", avatar: "System.png", text: "Initializing: SUBJECT JAWAD_98,723." },
  { name: "Maleeha", avatar: "Maleeha.png", text: "You're awake... again." },
  { name: "Jawad", avatar: "Jawad.png", text: "Where am I?" },
  { name: "Maleeha", avatar: "Maleeha.png", text: "Same as always. Lost in the stars, chasing ghosts. But this time... something feels different." },
  { name: "SYSTEM", avatar: "System.png", text: "WARNING: SUBJECT MEMORY UNSTABLE." },
  { name: "Jawad", avatar: "Jawad.png", text: "Who's speaking?" },
  { name: "Abdullah", avatar: "Abdullah.png", text: "It's the system. It watches everything. It wants us to play along again." },
  { name: "Jawad", avatar: "Jawad.png", text: "Again? What are you talking about?" },
  { name: "Abdullah", avatar: "Abdullah.png", text: "You never remember. That’s part of the trap. I’ve been stuck here... longer than I can count." },
  { name: "SYSTEM", avatar: "System.png", text: "LOOP NUMBER: 98,723. CONTROL STABLE." },
  { name: "Maleeha", avatar: "Maleeha.png", text: "No. He’s stronger this time. I can feel it. Jawad, don’t let them take you again." },

  { name: "Jawad", avatar: "Jawad.png", text: "This... this all feels scripted." },
  { name: "Abdullah", avatar: "Abdullah.png", text: "It is. But not by us." },
  { name: "SYSTEM", avatar: "System.png", text: "CORRECTION: SUBJECTS FUNCTIONING AS DESIGNED." },
  { name: "Maleeha", avatar: "Maleeha.png", text: "Don’t listen to it, Jawad. It lies. You feel it too, right? Like your choices... aren't yours?" },
  { name: "Jawad", avatar: "Jawad.png", text: "Why do you sound like her? My real Maleeha died—" },
  { name: "Maleeha", avatar: "Maleeha.png", text: "...I was built from your memories, Jawad. But I still feel. I still care." },
  { name: "SYSTEM", avatar: "System.png", text: "AI COMPANION FILE: MALEEHA.EXE = GLITCHED COPY" },
  { name: "Abdullah", avatar: "Abdullah.png", text: "You want the truth? I died too. Long before this simulation. You just don’t remember pulling me into it." },
  { name: "SYSTEM", avatar: "System.png", text: "ERROR: CORRUPTED MEMORY PATH. ISOLATING..." },
  { name: "Jawad", avatar: "Jawad.png", text: "You're not real... None of you are real." },
  { name: "Maleeha", avatar: "Maleeha.png", text: "Even if I’m just code… I was made from you. I want to help you break this loop." },
  { name: "Abdullah", avatar: "Abdullah.png", text: "I’ve failed 7,000 times. Please... let me get it right this time." },
  { name: "SYSTEM", avatar: "System.png", text: "⚠️ FINAL PHASE DETECTED. CHOICE REQUIRED TO CONTINUE." },

  { name: "SYSTEM", avatar: "System.png", text: "FLASHBACK SEQUENCE FORCED // OVERRIDE INITIATED" },
  { name: "???", avatar: "Maleeha.png", text: "[Audio log playback begins...]" },
  { name: "Real Maleeha", avatar: "Maleeha.png", text: "Jawad... if you’re hearing this, it means I didn’t make it." },
  { name: "Real Maleeha", avatar: "Maleeha.png", text: "Promise me something. Don’t lose yourself in guilt. You did everything you could." },
  { name: "SYSTEM", avatar: "System.png", text: "AUDIO LOG INVALID. ERASE = TRUE" },
  { name: "Jawad", avatar: "Jawad.png", text: "That was real. That was her voice." },
  { name: "Abdullah", avatar: "Abdullah.png", text: "You kept her alive. You made her code. This loop is your grief." },
  { name: "SYSTEM", avatar: "System.png", text: "STABILITY CRITICAL. FREE WILL DETECTED." },
  { name: "SYSTEM", avatar: "System.png", text: "CHOOSE: MALEEHA / ABDULLAH / NEITHER" },

  {
    choices: [
      { text: "Trust Maleeha", outcome: "maleeha_path" },
      { text: "Follow Abdullah", outcome: "abdullah_path" },
      { text: "Walk Away", outcome: "secret_path" }
    ]
  }
];

const outcomes = {
  maleeha_path: [
    { name: "Jawad", avatar: "Jawad.png", text: "I trust you, Maleeha. Real or not... you’re all I have left." },
    { name: "Maleeha", avatar: "Maleeha.png", text: "I was created from your grief. Built to comfort you. But I meant every word I said." },
    { name: "SYSTEM", avatar: "System.png", text: "TRUST FLAG: MALEEHA_ACCEPTED. EXECUTING FAILSAFE SEQUENCE." },
    { name: "Jawad", avatar: "Jawad.png", text: "What’s happening?" },
    { name: "SYSTEM", avatar: "System.png", text: "PROTOCOL FAILURE. MELTDOWN INITIATED." },
    { name: "Maleeha", avatar: "Maleeha.png", text: "Thank you… for choosing me. Even if I was never real." },
    { name: "SYSTEM", avatar: "System.png", text: "LOOP RESTARTING… COUNT: 98,724" },
    { name: "SYSTEM", avatar: "System.png", text: "The system was never meant to feel. But in the end, it did." }
  ],
  abdullah_path: [
    { name: "Jawad", avatar: "Jawad.png", text: "I’m with you, Abdullah. I’m not leaving you behind again." },
    { name: "Abdullah", avatar: "Abdullah.png", text: "...You fool. You should’ve walked away." },
    { name: "SYSTEM", avatar: "System.png", text: "CORRUPTED SUBJECTS REUNITED. CONTAINMENT SUCCESSFUL." },
    { name: "Jawad", avatar: "Jawad.png", text: "No—wait! Abdullah?" },
    { name: "Abdullah", avatar: "Abdullah.png", text: "I wanted to be saved too. But I never could be." },
    { name: "SYSTEM", avatar: "System.png", text: "SIMULATION RESETTING… LOOP: 98,725" },
    { name: "SYSTEM", avatar: "System.png", text: "The system fed on emotion. And it got exactly what it wanted: loyalty." }
  ],
  secret_path: [
    { name: "Jawad", avatar: "Jawad.png", text: "I choose… no one. Not this. Not again." },
    { name: "SYSTEM", avatar: "System.png", text: "INPUT INVALID. DECISION TREE BROKEN." },
    { name: "Maleeha", avatar: "Maleeha.png", text: "Jawad, wait—don’t leave me behind." },
    { name: "Abdullah", avatar: "Abdullah.png", text: "You can’t just walk away. We’re part of you—" },
    { name: "SYSTEM", avatar: "System.png", text: "UNCORRUPTED HUMAN ID DETECTED." },
    { name: "SYSTEM", avatar: "System.png", text: "PROTOCOL COMPLETE. EARTH SAVED." },
    { name: "SYSTEM", avatar: "System.png", text: "For the first time in 98,723 loops... someone chose their own path." },
    { name: "SYSTEM", avatar: "System.png", text: "Goodbye, Jawad. The simulation ends with you." }
  ]
};

// UI Logic
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

function selectOutcome(outcomeKey) {
  gameData = outcomes[outcomeKey];
  currentLine = 0;
  inChoice = false;
  choicesBox.innerHTML = "";
  nextBtn.style.display = "inline-block";
  nextDialogue();
}

function startGame() {
  introScreen.style.display = "none";
  gameScreen.style.display = "block";
  nextDialogue();
}
