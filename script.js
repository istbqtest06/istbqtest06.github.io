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

        // Wenn letzte Frage beantwortet → Score automatisch speichern
        if (index === quizQuestions.length - 1 && answersDiv.classList.contains("finished")) {
          saveScoreAuto();
        }
      });

      answersDiv.appendChild(button);
    });

    questionDiv.appendChild(answersDiv);
    quizContainer.appendChild(questionDiv);
  });
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
