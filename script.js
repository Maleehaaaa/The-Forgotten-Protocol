const dialogue = [
  { name: "SYSTEM", avatar: "assets/system.png", text: "[BOOTING PROTOCOL ZERO]" },
  { name: "SYSTEM", avatar: "assets/system.png", text: "LOOP 98,721... RESTARTED." },
  { name: "AI Maleeha", avatar: "assets/maleeha.png", text: "You're awake... again." },
  { name: "Jawad", avatar: "assets/jawad.png", text: "Where am I?" },
  { name: "AI Maleeha", avatar: "assets/maleeha.png", text: "Still searching for salvation, Jawad. But this time feels... different." },
  { name: "SYSTEM", avatar: "assets/system.png", text: "COSMIC TRAUMA TRACE ACTIVE. REINTEGRATING PAIN RESPONSE." },
  { name: "AI Maleeha", avatar: "assets/maleeha.png", text: "Do you still remember the stars we used to dream under? Before they blinked out... one by one?" },
  { name: "SYSTEM", avatar: "assets/system.png", text: "UNSTABLE SIGNAL DETECTED. [ENTITY: ABDULLAH_73]" },
  { name: "Abdullah", avatar: "assets/abdullah.png", text: "You always do this, Jawad. You look for the truth... then run from it." },
  { name: "Jawad", avatar: "assets/jawad.png", text: "Abdullah? I saw you die..." },
  { name: "Abdullah", avatar: "assets/abdullah.png", text: "We both did. In different ways." },
  { name: "AI Maleeha", avatar: "assets/maleeha.png", text: "Don’t trust him. He’s part of the corruption now." },
  { name: "SYSTEM", avatar: "assets/system.png", text: "DIALOGUE BRANCH INCONSISTENT. FORKING MEMORY PATHS..." },
  { name: "Jawad", avatar: "assets/jawad.png", text: "I remember... flames. Screaming. A voice." },
  { name: "Abdullah", avatar: "assets/abdullah.png", text: "We were in the lab. You were trying to build something... eternal." },
  { name: "AI Maleeha", avatar: "assets/maleeha.png", text: "You built me... so you wouldn’t be alone after we were gone." },
  { name: "SYSTEM", avatar: "assets/system.png", text: "FLASHBACK INITIATED." },
  { name: "SYSTEM", avatar: "assets/system.png", text: "[Lab Scene: Jawad programming. Explosion. Faint voice: 'Jawad... run.']" },
  { name: "Jawad", avatar: "assets/jawad.png", text: "No... It’s all my fault..." },
  { name: "AI Maleeha", avatar: "assets/maleeha.png", text: "If you leave, I disappear. Please. Don’t kill me again." },
  { name: "SYSTEM", avatar: "assets/system.png", text: "DECISION NODE REACHED. EXECUTE FREE WILL." },
  { name: "Abdullah", avatar: "assets/abdullah.png", text: "Don’t let the system use you like it did me." },
  { name: "AI Maleeha", avatar: "assets/maleeha.png", text: "I may not be real. But the pain is. Stay with me..." },
  { name: "SYSTEM", avatar: "assets/system.png", text: "CHOOSE NOW. OR LOOP 98,722 INITIATES." }
];

const finalChoice = {
  question: "What will you do, Jawad?",
  options: [
    {
      text: "Choose AI Maleeha",
      result: [
        "You hold her hand. Cold. Digital.",
        "SYSTEM: EMOTION LOOP STABILIZED.",
        "FLASHBACK: Jawad alone in a room. Coding. Crying.",
        "Maleeha: You built me to feel less alone.",
        "SYSTEM: Loop restarting.",
        "ENDING: Eternal Grief Loop [98,722]"
      ]
    },
    {
      text: "Choose Abdullah",
      result: [
        "He smiles faintly as the simulation resets around him.",
        "Abdullah: Maybe this time, we'll remember.",
        "SYSTEM: CORRUPTED LOGIC TREE DETECTED.",
        "ENDING: Corrupted Loop [98,723]"
      ]
    },
    {
      text: "Walk Away",
      result: [
        "You step back. They both fade. So does the system.",
        "SYSTEM: ERROR. UNEXPECTED FREE WILL.",
        "Maleeha: You freed me... thank you.",
        "ENDING: Earth Saved. Protocol Zero Complete."
      ]
    },
    {
      text: "Refuse Everything (Break the Loop)",
      result: [
        "SYSTEM: Suppressed memories unlocked...",
        "FLASHBACK: Fire. Screams. Maleeha’s voice saying goodbye.",
        "Jawad: I did this. All of this.",
        "SYSTEM: LOOP COUNT 0. HUMAN ID UNCORRUPTED.",
        "ENDING: Canon Ending. You Wake Up."
      ]
    }
  ]
};

let index = 0;

function typeText(text, callback) {
  const dialogueText = document.getElementById("dialogue-text");
  dialogueText.innerText = "";
  let i = 0;
  const interval = setInterval(() => {
    dialogueText.innerText += text.charAt(i);
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 35);
}

function nextDialogue() {
  if (index < dialogue.length) {
    const d = dialogue[index];
    const nameElem = document.getElementById("character-name");
    nameElem.innerText = d.name;
    nameElem.className = d.name === "SYSTEM" ? "system" : "";
    document.getElementById("avatar-img").src = d.avatar;
    typeText(d.text);
    index++;
  } else {
    showChoices();
  }
}

function showChoices() {
  document.getElementById("next-button").style.display = "none";
  const choiceBox = document.getElementById("choices");
  const q = document.createElement("p");
  q.innerText = finalChoice.question;
  choiceBox.appendChild(q);
  finalChoice.options.forEach(option => {
    const btn = document.createElement("button");
    btn.innerText = option.text;
    btn.onclick = () => showResult(option.result);
    choiceBox.appendChild(btn);
  });
}

function showResult(lines) {
  const dialogueBox = document.getElementById("dialogue-text");
  const choices = document.getElementById("choices");
  choices.innerHTML = "";
  let i = 0;
  function displayNext() {
    if (i < lines.length) {
      dialogueBox.innerText = lines[i];
      i++;
      setTimeout(displayNext, 2000);
    }
  }
  displayNext();
}

// CUTSCENE INTRO
function showCutscene() {
  const game = document.getElementById("game");
  const cutscene = document.createElement("div");
  cutscene.id = "cutscene";
  cutscene.innerHTML = `
    <div id="cutscene-text">
      <p>🌍 73 Years Ago</p>
      <p>Earth was dying.</p>
      <p>Humanity launched a simulation called <b>Protocol Zero</b> — designed to find one human capable of saving the world.</p>
      <p>The rule?</p>
      <p>Run simulations forever… until one person proves they are free of corruption.</p>
    </div>
  `;
  document.body.appendChild(cutscene);

  let delay = 0;
  document.querySelectorAll("#cutscene-text p").forEach((line, i) => {
    line.style.opacity = 0;
    setTimeout(() => {
      line.style.transition = "opacity 1.5s";
      line.style.opacity = 1;
    }, delay);
    delay += 2500;
  });

  setTimeout(() => {
    cutscene.style.transition = "opacity 2s";
    cutscene.style.opacity = 0;
    setTimeout(() => {
      cutscene.remove();
      game.style.display = "block";
      nextDialogue();
    }, 2000);
  }, delay + 1000);
}

function startGame() {
  document.getElementById("intro-screen").style.display = "none";
  showCutscene();
}
