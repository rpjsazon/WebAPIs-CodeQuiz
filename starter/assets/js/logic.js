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

// To end the quiz. Once, the timer remaining hit 0 then show the final score.
function endQuiz() {
  // Reference: https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
  clearInterval();
  var endScreen = document.querySelector("#end-screen");
  endScreen.style.display = "block";
  document.querySelector("#final-score").textContent = score;
}

// How can I display the questions to the HTML, I was thinking to change the P tags instead of
// the div question.
// Create div? 
function displayQuestion(){
  // Calling objects in question.js
  var currentQ = quiz[currentQuestion];

  var questionElement = document.querySelector("#questions");
  questionElement.style.display = "block";
  // Reference: https://www.w3schools.com/js/js_json_stringify.asp
  // Re-watched Zoom Meeting with Dan about JSON stringify and how to use it to convert object to string.
  questionElement.textContent = JSON.stringify(currentQ.question);

  // Test For Loop.
  // for (let i = 0; i < currentQ.answers.length; i++) {
  //   choicesElement[i].setAttributes("style", "display: block");
  //   choicesElement[i].textContent = currentQ.answers;
  // }

  // https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
  // for (let i = 0; i < currentQ.answers.length; i++) {

  //   var newDiv = document.getElementById("choices");
  //   document.body.insertBefore(newDiv);
  // }

  
}