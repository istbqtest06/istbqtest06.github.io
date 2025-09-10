let score = 0;
const maxQuestions = 40;

// Pool für alle Fragen
let questionPool = [];

// Super Shuffle Funktion
function superShuffle(array) {
  for (let k = 0; k < 2; k++) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  const offset = Math.floor(Math.random() * array.length);
  return array.slice(offset).concat(array.slice(0, offset));
}

function getQuestions(quizData, amount) {
  if (questionPool.length < amount) {
    questionPool = superShuffle([...quizData]);
  }
  return questionPool.splice(0, amount);
}

// Timer sticky oben links erstellen und starten
function createStickyTimer(durationInSeconds) {
  const timerDiv = document.createElement('div');
  timerDiv.id = 'timer';
  timerDiv.style.position = 'fixed';
  timerDiv.style.top = '20px';
  timerDiv.style.left = '150px';
  timerDiv.style.padding = '10px 15px';
  timerDiv.style.borderRadius = '5px';
  timerDiv.style.fontWeight = 'bold';
  timerDiv.style.zIndex = '1000';
  document.body.appendChild(timerDiv);

  let timer = durationInSeconds;

  const interval = setInterval(() => {
    const hours = Math.floor(timer / 3600);
    const minutes = Math.floor((timer % 3600) / 60);
    const seconds = timer % 60;

    timerDiv.textContent =
      `${hours.toString().padStart(2,'0')}:` +
      `${minutes.toString().padStart(2,'0')}:` +
      `${seconds.toString().padStart(2,'0')}`;

    if (timer <= 0) {
      clearInterval(interval);
      timerDiv.textContent = "00:00:00";
      alert("Die Zeit ist abgelaufen!");
      document.querySelectorAll('.answers button').forEach(b => b.disabled = true);
      saveScore(score); // auch speichern wenn Zeit um ist
    }

    timer--;
  }, 1000);
}

// Quiz rendern
function renderQuiz(quizData) {
  const quizContainer = document.getElementById('quiz');

  const scoreDiv = document.createElement('div');
  scoreDiv.id = 'scoreDisplay';
  scoreDiv.textContent = `Punkte: ${score} / ${maxQuestions}`;
  quizContainer.appendChild(scoreDiv);

  const quizQuestions = getQuestions(quizData, maxQuestions);

  quizQuestions.forEach((item, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    if (item.description) {
      const descDiv = document.createElement('div');
      descDiv.classList.add('description');
      descDiv.textContent = item.description;
      questionDiv.appendChild(descDiv);
    }

    if (item.image) {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = `Bild zu Frage ${index + 1}`;
      questionDiv.appendChild(img);
    }

    const qText = document.createElement('strong');
    qText.textContent = `Frage ${index + 1}: ${item.question}`;
    questionDiv.appendChild(qText);

    const answersDiv = document.createElement('div');
    answersDiv.classList.add('answers');

    let correctAnswers = Array.isArray(item.correct)
      ? item.correct.map(i => item.options[i])
      : [item.options[item.correct]];

    let chosenCorrect = new Set();
    const shuffledOptions = superShuffle([...item.options]);

    shuffledOptions.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;

      button.addEventListener('click', () => {
        if (answersDiv.classList.contains("finished")) return;

        if (correctAnswers.includes(option)) {
          button.classList.add('correct');
          chosenCorrect.add(option);

          if (chosenCorrect.size === correctAnswers.length) {
            score++;
            answersDiv.classList.add("finished");
            Array.from(answersDiv.children).forEach(b => b.disabled = true);
          }
        } else {
          button.classList.add('wrong');
          correctAnswers.forEach(corr => {
            [...answersDiv.children].forEach(b => {
              if (b.textContent === corr) b.classList.add("correct");
            });
          });
          answersDiv.classList.add("finished");
          Array.from(answersDiv.children).forEach(b => b.disabled = true);
        }

        scoreDiv.textContent = `Punkte: ${score} / ${quizQuestions.length}`;
        checkIfFinished(); // prüfen ob Quiz beendet ist
      });

      answersDiv.appendChild(button);
    });

    questionDiv.appendChild(answersDiv);
    quizContainer.appendChild(questionDiv);
  });
}

// Prüfen ob Quiz fertig ist → Score speichern
function checkIfFinished() {
  const finished = document.querySelectorAll(".answers.finished").length;
  if (finished === maxQuestions) {
    saveScore(score);
  }
}

// Score in LocalStorage speichern
function saveScore(points) {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  const date = new Date().toLocaleString(); // Zeitpunkt merken
  scores.push({ points, date });
  localStorage.setItem("scores", JSON.stringify(scores));
}
function showScoreList() {
  let scores = JSON.parse(localStorage.getItem("scores")) || [];
  let listDiv = document.getElementById("scoreList");

  if (!listDiv) {
    listDiv = document.createElement("div");
    listDiv.id = "scoreList";
    listDiv.style.position = "fixed";
    listDiv.style.right = "20px";
    listDiv.style.top = "70px";
    listDiv.style.width = "250px";
    listDiv.style.padding = "15px";
    listDiv.style.borderRadius = "10px";
    listDiv.style.background = "rgba(0,0,0,0.85)";
    listDiv.style.color = "#fff";
    listDiv.style.fontFamily = "Arial, sans-serif";
    listDiv.style.fontSize = "14px";
    listDiv.style.maxHeight = "300px";
    listDiv.style.overflowY = "auto";
    listDiv.style.boxShadow = "0 4px 15px rgba(0,0,0,0.3)";
    listDiv.style.zIndex = "2000";

    // Close Button
    const closeBtn = document.createElement("button");
    closeBtn.textContent = "✖";
    closeBtn.style.float = "right";
    closeBtn.style.background = "transparent";
    closeBtn.style.border = "none";
    closeBtn.style.color = "#fff";
    closeBtn.style.fontSize = "16px";
    closeBtn.style.cursor = "pointer";
    closeBtn.addEventListener("click", () => listDiv.remove());
    listDiv.appendChild(closeBtn);

    // Überschrift
    const heading = document.createElement("h3");
    heading.textContent = "Gespeicherte Punktestände";
    heading.style.marginTop = "0";
    heading.style.color = "#ffd700";
    listDiv.appendChild(heading);

    // Liste erzeugen
    const ul = document.createElement("ul");
    ul.style.paddingLeft = "20px";
    ul.style.margin = "0";
    ul.style.listStyleType = "disc";

    scores.forEach(s => {
      const li = document.createElement("li");
      li.textContent = `${s.date} → ${s.points} Punkte`;
      ul.appendChild(li);
    });

    listDiv.appendChild(ul);

    document.body.appendChild(listDiv);
  }
}




// Darkmode
const darkBtn = document.getElementById("darkToggle");
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkBtn.textContent = "☀️";
}
darkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    darkBtn.textContent = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    darkBtn.textContent = "🌙";
  }
});



// Quiz starten
renderQuiz(quizData);
createStickyTimer(60 * 60);


const showScoresBtn = document.getElementById("showScoresBtn");
showScoresBtn.style.position = "fixed";
showScoresBtn.style.bottom = "20px";      // unten links
showScoresBtn.style.left = "20px";
showScoresBtn.style.padding = "12px 20px";
showScoresBtn.style.borderRadius = "25px";
showScoresBtn.style.border = "none";
showScoresBtn.style.background = "#28a745"; // schön grüner Farbton
showScoresBtn.style.color = "#fff";
showScoresBtn.style.fontSize = "16px";
showScoresBtn.style.fontWeight = "bold";
showScoresBtn.style.cursor = "pointer";
showScoresBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.25)";
showScoresBtn.style.transition = "all 0.2s ease";

// Hover Effekt
showScoresBtn.addEventListener("mouseenter", () => {
  showScoresBtn.style.background = "#218838";
  showScoresBtn.style.transform = "translateY(-2px)";
});
showScoresBtn.addEventListener("mouseleave", () => {
  showScoresBtn.style.background = "#28a745";
  showScoresBtn.style.transform = "translateY(0)";
});

// Klick → Score-Liste anzeigen
showScoresBtn.addEventListener("click", showScoreList);