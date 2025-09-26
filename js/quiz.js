let currentQuestion = 0;
let answers = JSON.parse(localStorage.getItem("answers")) || [];

// Load username
document.addEventListener("DOMContentLoaded", () => {
  const user = localStorage.getItem("nickname") || "Friend";
  document.getElementById("userName").textContent = user;
  loadQuestion();
  updateProgress();
});

// Load Question
function loadQuestion() {
  const qBox = document.getElementById("quizBox");
  qBox.innerHTML = "";

  const q = questions[currentQuestion];
  if (!q) return qBox.innerHTML = "<p>Question not found.</p>";

  const nickname = localStorage.getItem("nickname") || "Friend";

  // Motivational message
  const motivate = document.createElement("h3");
  motivate.style.color = "#00ffff";
  motivate.style.textAlign = "center";
  motivate.style.textShadow = "0 0 5px #00ffff, 0 0 10px #00ffff";
  motivate.innerText = `Keep going, ${nickname}! You’re doing great!`;
  qBox.appendChild(motivate);

  // Question
  const qElem = document.createElement("h3");
  qElem.innerText = `Q${currentQuestion+1}. ${q.text}`;
  qElem.style.marginTop = "15px";
  qBox.appendChild(qElem);

  // Options
  q.options.forEach((opt, i) => {
    const card = document.createElement("div");
    card.className = "option-card";
    card.innerText = opt;
    card.onclick = () => selectOption(i);
    if (answers[currentQuestion] === i) card.classList.add("selected");
    qBox.appendChild(card);
  });

  updateButtons();
  updateProgress();
}

// Select Option
function selectOption(i) {
  answers[currentQuestion] = i;
  localStorage.setItem("answers", JSON.stringify(answers));
  loadQuestion();
}

// Navigation
function nextQuestion() {
  if (answers[currentQuestion] == null) { alert("Select an option!"); return; }
  if (currentQuestion < questions.length - 1) { currentQuestion++; loadQuestion(); }
}

function prevQuestion() {
  if (currentQuestion > 0) { currentQuestion--; loadQuestion(); }
}

// Submit Quiz
function submitQuiz() {
  if (answers.length < questions.length || answers.includes(undefined)) { alert("Answer all questions!"); return; }

  const results = questions.map((q, i) => ({
    metric: q.metric,
    answer: q.options[answers[i]],
    score: scores[q.options[answers[i]]]
  }));

  localStorage.setItem("quizResults", JSON.stringify(results));
  window.location.href = "results.html";
}

// Buttons
function updateButtons() {
  document.getElementById("prevBtn").style.display = currentQuestion === 0 ? "none" : "inline-block";
  document.getElementById("nextBtn").style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
  document.getElementById("submitBtn").style.display = currentQuestion === questions.length - 1 ? "inline-block" : "none";
}

// Progress Bar
function updateProgress() {
  const progress = document.getElementById("progressBar");
  const percent = ((currentQuestion + 1) / questions.length) * 100;
  if (progress) progress.style.width = percent + "%";
}
