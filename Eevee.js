let score = 0;
let currentQuestionIndex = 0;

// [ ist ein array = Aufzählun, { Ist ein spezifisches Objekt
let questions = [
	{
		question: "Wie lautet die englische Schreibweise von Evoli?",
		answers: ["Eve", "Eevee", "Evee", "Eeve"],
		correctAnswer: 1

	},
	{
		question: "Ist Eevee ein Geburtstagsevoli?",
		answers: ["Always has been", "Nein ist leider vorbei"],
		correctAnswer: 0

	},
	{
		question: "Kann Eevee gut zeichnen?",
		answers: ["Ja"],
		correctAnswer: 0 

	},
    {
		question: "Wie viele Entwicklungsoptionen bieten Evolis?",
		answers: ["DREI", "Acht", "Sieben", "Neun"],
		correctAnswer: 1

	},
    {
		question: "Fahre fort: Evolis haben...",
		answers: ["Keinen Skill", "Depressionen", "das gewisse Etwas"],
		correctAnswer: 2

	},
	{
		question: "Kann Eevee tanzen?",
		answers: ["Show em moves!", "Ne :("],
		correctAnswer: 0

	}
];
// Funktionalität
function displayQuestion(){

    if(currentQuestionIndex >= questions.length){
        document.getElementById('quiz-container').hidden = true;
        document.getElementById('result').hidden = false;
        document.getElementById('score').textContent = score;
        return;
    }


    let question = questions[currentQuestionIndex];

    document.getElementById('question').textContent = question.question;
    
    let answersDiv = document.getElementById("answers");
    answersDiv.innerHTML = "";

    question.answers.forEach((answer, index) => {
        let answerButton = document.createElement('button');
        answerButton.classList.add("btn", "btn-warning", "me-2");
        answerButton.textContent = answer;
        answerButton.onclick = () => checkAnswer(index);
        answersDiv.appendChild(answerButton);
    });
}

displayQuestion();

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score += 1;
    }

    nextQuestion();
}

function nextQuestion(){
    currentQuestionIndex += 1;
    displayQuestion();
}

function checkAnswer(userAnswer){
    let correctAnswer = questions[currentQuestionIndex].correctAnswer;

    if(userAnswer == correctAnswer){
        score += 1;
    }

    nextQuestion();

    // Überprüfen, ob die Frage "Kann Eevee tanzen?" beantwortet wurde und die richtige Antwort ausgewählt wurde
    if (currentQuestionIndex === 3 && userAnswer === 0) {
        // Wenn ja, zeige die Datei an (Annahme: Sie haben eine Datei mit dem Namen 'moves.gif' im gleichen Verzeichnis wie Ihr HTML-Dokument)
        showMovesFile();
    }
}

// ...

function showMovesFile() {
    // Zeigen Sie die Datei an, indem Sie das Bild oder den Inhalt je nach Anforderungen einblenden
    // Hier ist ein Beispiel für das Hinzufügen eines Bildes zu Ihrem Score-Screen
    let movesImage = document.createElement('img');
    movesImage.src = 'dancingEevee.gif'; // Geben Sie den genauen Pfad zur Datei an
    movesImage.classList.add('dancingEevee.gif'); // Fügen Sie Klassen hinzu, um das Styling zu steuern
    document.getElementById('result').appendChild(movesImage);

    movesImage.width = 300; // Breite in Pixeln
    movesImage.height = 200; // Höhe in Pixeln
}