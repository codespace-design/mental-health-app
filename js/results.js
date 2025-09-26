const nickname = localStorage.getItem("nickname");
document.getElementById("userName").innerText = nickname;

const answers = JSON.parse(localStorage.getItem("answers"));
let metrics = { stress: 0, procrastination: 0, anxiety: 0, relaxation: 0, stigma: 0, selfcare: 0 };

answers.forEach((ans, i) => {
  const q = questions[i];
  metrics[q.metric] += scores[ans];
});

// Interpretation
function interpret(score) {
  if (score <= 5) return "Low";
  if (score <= 10) return "Medium";
  return "High";
}

let resultsHTML = `
  <p><strong>Stress:</strong> ${interpret(metrics.stress)}</p>
  <p><strong>Procrastination:</strong> ${interpret(metrics.procrastination)}</p>
  <p><strong>Anxiety:</strong> ${interpret(metrics.anxiety)}</p>
  <p><strong>Relaxation Need:</strong> ${interpret(metrics.relaxation)}</p>
  <p><strong>Stigma Awareness:</strong> ${interpret(metrics.stigma)}</p>
  <p><strong>Self-Care Awareness:</strong> ${interpret(metrics.selfcare)}</p>
`;

document.getElementById("resultsBox").innerHTML = resultsHTML;
