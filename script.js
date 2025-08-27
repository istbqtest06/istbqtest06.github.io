
let score = 0;
const maxQuestions = 40;

// Funktion, um ein Array zu mischen
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}



// Quiz rendern
function renderQuiz(quizData) {
  const quizContainer = document.getElementById('quiz');

  // Score-Anzeige erstellen
const scoreDiv = document.createElement('div');
scoreDiv.id = 'scoreDisplay';
scoreDiv.textContent = `Punkte: ${score} / ${maxQuestions}`;
quizContainer.appendChild(scoreDiv);


  // Fragen mischen und maximal maxQuestions verwenden
  const quizQuestions = shuffle([...quizData]).slice(0, maxQuestions);

  quizQuestions.forEach((item, index) => {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question');

    // Beschreibung hinzufügen
    if(item.description) {
      const descDiv = document.createElement('div');
      descDiv.classList.add('description');
      descDiv.textContent = item.description;
      questionDiv.appendChild(descDiv);
    }

    // Bild hinzufügen, falls vorhanden
    if(item.image) {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = `Bild zu Frage ${index + 1}`;
      questionDiv.appendChild(img);
    }

    // Frage hinzufügen
    const qText = document.createElement('strong');
    qText.textContent = `Frage ${index + 1}: ${item.question}`;
    questionDiv.appendChild(qText);

    // Antwort-Buttons erstellen
    const answersDiv = document.createElement('div');
    answersDiv.classList.add('answers');

    item.options.forEach((option, i) => {
      const button = document.createElement('button');
      button.textContent = option;

      button.addEventListener('click', () => {
        if(i === item.correct) {
          button.classList.add('correct');
          score++;
        } else {
          button.classList.add('wrong');
          answersDiv.children[item.correct].classList.add('correct');
        }
        // Buttons deaktivieren
        Array.from(answersDiv.children).forEach(b => b.disabled = true);
        // Score aktualisieren
        scoreDiv.textContent = `Punkte: ${score} / ${quizQuestions.length}`;
      });

      answersDiv.appendChild(button);
    });

    questionDiv.appendChild(answersDiv);
    quizContainer.appendChild(questionDiv);
  });
}
const darkBtn = document.getElementById("darkToggle");

// Prüfen ob Darkmode gespeichert ist
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  darkBtn.textContent = "☀️";
}

// Klick-Event
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




// Quiz-Daten einfügen
// Hier solltest du dein quizData aus data.js importieren
renderQuiz(quizData);


