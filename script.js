let score = 0;
const maxQuestions = 40;

// Fisher-Yates Shuffle mit zusätzlichem Offset
function shuffle(array) {
  // Erst klassisch mischen
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }

  // Dann zufälligen Start-Offset einbauen
  const offset = Math.floor(Math.random() * array.length);
  return array.slice(offset).concat(array.slice(0, offset));
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
    if (item.description) {
      const descDiv = document.createElement('div');
      descDiv.classList.add('description');
      descDiv.textContent = item.description;
      questionDiv.appendChild(descDiv);
    }

    // Bild hinzufügen, falls vorhanden
    if (item.image) {
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

    // Antworten auch mischen!
    const shuffledOptions = shuffle([...item.options]);

    shuffledOptions.forEach((option) => {
      const button = document.createElement('button');
      button.textContent = option;

      button.addEventListener('click', () => {
        if (option === item.options[item.correct]) {
          button.classList.add('correct');
          score++;
        } else {
          button.classList.add('wrong');

          // richtige Antwort hervorheben
          const correctIndex = shuffledOptions.indexOf(item.options[item.correct]);
          answersDiv.children[correctIndex].classList.add('correct');
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


// Darkmode (bleibt wie gehabt)
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


// Quiz-Daten einfügen
renderQuiz(quizData);
