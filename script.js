
// Full script.js already provided in previous messages — include that here.
// For brevity in this notebook, it would be re-added completely in real deployment.
const dialogue = {
  // (You would paste the entire updated dialogue object here as shown earlier)
};

// --- Engine ---
let currentKey = "start";

function startGame() {
  document.getElementById("intro-screen").style.display = "none";
  document.getElementById("game").style.display = "block";
  showDialogue(currentKey);
}

function showDialogue(key) {
  const line = dialogue[key];
  if (!line) return;
  document.getElementById("avatar-img").src = line.avatar;
  document.getElementById("character-name").textContent = line.speaker;
  document.getElementById("dialogue-text").textContent = "";
  document.getElementById("choices").innerHTML = "";
  document.getElementById("next-button").style.display = "none";

  // Typing effect
  let i = 0;
  const typing = setInterval(() => {
    document.getElementById("dialogue-text").textContent += line.text.charAt(i);
    i++;
    if (i > line.text.length) clearInterval(typing);
  }, 20);

  if (line.choices) {
    setTimeout(() => {
      line.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.textContent = choice.text;
        btn.onclick = () => {
          currentKey = choice.nextId;
          showDialogue(currentKey);
        };
        document.getElementById("choices").appendChild(btn);
      });
    }, line.delay);
  } else if (line.next) {
    setTimeout(() => {
      currentKey = line.next;
      showDialogue(currentKey);
    }, line.delay);
  }
}
