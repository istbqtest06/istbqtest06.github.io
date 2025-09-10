



// Frage vom "Server laden"
fetch('questions.json')
  .then(res => res.json())
  .then(data => {
    // server: hier Daten vom Server empfangen
    quizData = data;
    renderQuiz(quizData);
  });

// Antwort an "Server" senden
function sendAnswerToServer(questionId, chosenOption) {
  // server: hier wird die Antwort geprüft
  console.log(`Server: Prüfe Frage ${questionId}, gewählte Option: ${chosenOption}`);

  // server: simulieren, dass der Server sagt, ob die Antwort korrekt ist
  const simulatedServerCorrectAnswers = [0, 1]; // nur Beispiel
  const isCorrect = simulatedServerCorrectAnswers[questionId] === chosenOption;

  return new Promise(resolve => {
    setTimeout(() => {
      // server: Antwort zurück an Client
      resolve({ correct: isCorrect });
    }, 300); // server-delay simulieren
  });
}

// Beispiel: Antwort prüfen
function checkAnswer(questionId, chosenOption) {
  sendAnswerToServer(questionId, chosenOption).then(result => {
    if(result.correct) {
      score++;
      console.log(`Server: Antwort korrekt! Score: ${score}`);
    } else {
      console.log('Server: Antwort falsch!');
    }
  });
}
