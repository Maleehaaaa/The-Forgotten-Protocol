const input = document.getElementById('input');
const result = document.getElementById('result');
const buttons = document.querySelectorAll('button');
const clickSound = document.getElementById('click-sound');

let expression = "";
let lastAns = 0;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');
    clickSound.currentTime = 0;
    clickSound.play();

    if (value === "AC") {
      expression = "";
      input.textContent = "0";
      result.textContent = "";
    } else if (value === "DEL") {
      expression = expression.slice(0, -1);
      input.textContent = expression || "0";
    } else if (value === "=") {
      try {
        const evalExpression = expression
          .replace(/√\(/g, "Math.sqrt(")
          .replace(/π/g, "Math.PI")
          .replace(/log\(/g, "Math.log10(")
          .replace(/sin\(/g, "Math.sin(")
          .replace(/cos\(/g, "Math.cos(")
          .replace(/tan\(/g, "Math.tan(")
          .replace(/Ans\(\)/g, lastAns)
          .replace(/EXP/g, "e")
          .replace(/ENG/g, "*10**");

        lastAns = eval(evalExpression);
        result.textContent = "= " + lastAns;
      } catch {
        result.textContent = "Error";
      }
    } else if (value === "SHIFT" || value === "MODE") {
      alert(`${value} not functional in this version`);
    } else {
      expression += value;
      input.textContent = expression;
    }
  });
});