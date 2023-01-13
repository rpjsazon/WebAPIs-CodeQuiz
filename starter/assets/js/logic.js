var currentQuestion = 0;
var score = 0;
var timeRemaining = 60;

// Initialized index.html Line 25 <button id="start">Start Quiz</button>
var startListen = document.querySelector("#start");
startListen.addEventListener("click", startQuiz);

// When the "Start Quiz" is pressed, hide the display and display the questions.
function startQuiz() {
  startListen.style.display = "none";
  displayQuestion();
  startTimer();
}

// Initialized the timer once the "Start Quiz" is pressed.
// <div class="timer">Time: <span id="time">0</span></div> 
function startTimer() {
  setInterval(function(){ 
    timeRemaining--;
    // Display the timer to index.html
    document.querySelector("#time").textContent = timeRemaining;
    // I set the time remaining to 60 seconds and if hit 0 then call function endGame or highscore.html
    if (timeRemaining === 0) {
      endQuiz();
    }
  }, 1000);
}

function displayQuestion(){
  var currentQ = questions[currentQuestion];
  var questionElement = document.querySelector("#question-title")
  questionElement.textContent = currentQ.question;
}