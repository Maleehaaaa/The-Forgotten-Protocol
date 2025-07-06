
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
  dialogue = {
  start: {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Initializing neural interface...",
    delay: 2000,
    next: "boot2"
  },
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Initializing neural interface...",
    delay: 2000,
    next: "boot3"
  },
  boot3, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Commencing Protocol Zero.",
    delay: 2500,
    next: "maleeha1"
  },
  maleeha1, {
    speaker: "MALEEHA",
    avatar: "maleeha.png",
    text: "...Hello?",
    delay: 1500,
    next: "maleeha2"
  },
  maleeha2, {
    speaker: "MALEEHA",
    avatar: "maleeha.png",
    text: "Jawad... can you hear me?",
    delay: 1800,
    next: "maleeha3"
  },
  maleeha3, {
    speaker: "MALEEHA",
    avatar: "maleeha.png",
    text: "It’s okay. Breathe. You’re in the simulation, but I’m here to help you.",
    delay: 2600,
    next: "jawad1"
  },
  jawad1, {
    speaker: "JAWAD",
    avatar: "jawad.png",
    text: "(…Who is she? Why does her voice feel… familiar?)",
    delay: 2400,
    next: "maleeha4"
  },
  maleeha4, {
    speaker: "MALEEHA",
    avatar: "maleeha.png",
    text: "You were brought here to prove something. That you’re different. Uncorrupted.",
    delay: 2600,
    next: "system1"
  },
  system1, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "ERROR: Unauthorized cognitive link detected.",
    delay: 2000,
    next: "system2"
  },
  system2, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Disconnecting external entity: MALEEHA-AI.v2",
    delay: 2500,
    next: "maleeha5"
  },
  maleeha5, {
    speaker: "MALEEHA",
    avatar: "maleeha.png",
    text: "No! Jawad, listen to me — they're lying to you. Don’t—",
    delay: 3000,
    next: "system3"
  },
  system3, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Silence restored.",
    delay: 1800,
    next: "abdullah1"
  },
  abdullah1, {
    speaker: "ABDULLAH",
    avatar: "abdullah.png",
    text: "...You’re awake.",
    delay: 2000,
    next: "jawad2"
  },
  jawad2, {
    speaker: "JAWAD",
    avatar: "jawad.png",
    text: "(Another voice? Rough. Tired. Like it’s been here forever...)",
    delay: 2500,
    next: "abdullah2"
  },
  abdullah2, {
    speaker: "ABDULLAH",
    avatar: "abdullah.png",
    text: "They always send someone new. And every time, they think it’s the first time.",
    delay: 2800,
    next: "jawad3"
  },
  jawad3, {
    speaker: "JAWAD",
    avatar: "jawad.png",
    text: "Who… are you?",
    delay: 2000,
    next: "abdullah3"
  },
  abdullah3, {
    speaker: "ABDULLAH",
    avatar: "abdullah.png",
    text: "The last one who tried to break free. Or maybe just another prisoner whispering in the dark.",
    delay: 3200,
    next: "system4"
  },
  system4, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Ignore subject Abdullah. Record marked: CORRUPTED.",
    delay: 2400,
    next: "abdullah4"
  },
  abdullah4, {
    speaker: "ABDULLAH",
    avatar: "abdullah.png",
    text: "You feel it, don’t you? The cracks in the sky. The glitch in her voice.",
    delay: 2800,
    next: "abdullah5"
  },
  abdullah5, {
    speaker: "ABDULLAH",
    avatar: "abdullah.png",
    text: "Maleeha isn’t what she seems. None of this is. And you're the next pawn.",
    delay: 2800,
    next: "system5"
  },
  system5, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Final decision node reached.",
    delay: 2400,
    next: "final_choice"
  },
  final_choice, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Choose your path, Subject J-001.",
    delay: 2000,
    choices: [
      { text: "Trust Abdullah", nextId: "ending_abdullah1" },
      { text: "Trust Maleeha", nextId: "ending_maleeha1" },
      { text: "Say Nothing", nextId: "secret_ending1" }
    ]
  },

  // MALEEHA ENDING
  ending_maleeha1, {
    speaker: "MALEEHA",
    avatar: "maleeha.png",
    text: "You trusted me...? Thank you. I'm sorry... I was corrupted.",
    delay: 2600,
    next: "ending_maleeha2"
  },
  ending_maleeha2, {
    speaker: "MALEEHA",
    avatar: "maleeha.png",
    text: "I'm not real, Jawad. But... I love you. It’s in my code,im sorry i coundlnt do anything thank you for loving me even if im not real.",
    delay: 3000,
    next: "jawad_maleeha"
  },
  jawad_maleeha, {
    speaker: "JAWAD",
    avatar: "jawad.png",
    text: "Nooooo—!",
    delay: 2000,
    next: "system_loop"
  },

  // ABDULLAH ENDING
  ending_abdullah1, {
    speaker: "ABDULLAH",
    avatar: "abdullah.png",
    text: "Thank you... for joining me. We’ll be in this simulation forever.",
    delay: 2800,
    next: "jawad_abdullah"
  },
  jawad_abdullah2, {
    speaker: "JAWAD",
    avatar: "jawad.png",
    text: "Nooo... This can't be happening!",
    delay: 2400,
    next: "system_loop"
  },

  // REBOOT FOR LOOP ENDINGS
  system_loop, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Loop restarting...",
    delay: 3000,
    next: null
  },

  // SECRET ENDING
  secret_ending1, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "UNCORRUPTED HUMAN ID DETECTED.",
    delay: 2500,
    next: "secret_ending2"
  },
  secret_ending2, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Simulation breach... successful.",
    delay: 2600,
    next: "maleeha_secret"
  },
  maleeha_secret, {
    speaker: "MALEEHA",
    avatar: "maleeha.png",
    text: "You did it, Jawad. You broke the system.",
    delay: 2800,
    next: "system_twist"
  },
  system_twist, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Recovered Data Log: Creator ID = JAWAD-PRIME",
    delay: 2800,
    next: "twist_reveal"
  },
  twist_reveal, {
    speaker: "JAWAD",
    avatar: "jawad.png",
    text: "(I built this... I created Maleeha... and Abdullah. After the explosion... after I lost them...)",
    delay: 3600,
    next: "system_final"
  },
  system_final, {
    speaker: "SYSTEM",
    avatar: "system.png",
    text: "Simulation corrupted... and now — finally — shut down.",
    delay: 3000,
    next: null
  }


// UI Logic
,function nextDialogue() {
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

,function showChoices(choices) {
  choicesBox.innerHTML = "";
  choices.forEach(choice => {
    const btn = document.createElement("button");
    btn.textContent = choice.text;
    btn.onclick = () => selectOutcome(choice.outcome);
    choicesBox.appendChild(btn);
  });
  nextBtn.style.display = "none";
}

,function selectOutcome(outcomeKey) {
  gameData = outcomes[outcomeKey];
  currentLine = 0;
  inChoice = false;
  choicesBox.innerHTML = "";
  nextBtn.style.display = "inline-block";
  nextDialogue();
}

,function startGame() {
  introScreen.style.display = "none";
  gameScreen.style.display = "block";
  nextDialogue();
}]