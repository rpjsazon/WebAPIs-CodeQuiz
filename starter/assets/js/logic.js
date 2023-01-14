var currentQuestion = 0;
var score = 0;
var timeRemaining = 60;
// Variable for time interbal 1000ms that will be set later.
var timeInterval;


// Initialized index.html Line 25 <button id="start">Start Quiz</button>
var startListen = document.querySelector("#start");
startListen.addEventListener("click", startQuiz);

// When the "Start Quiz" is pressed, hide the display and display the questions.
function startQuiz() {
  startTimer();
  displayQuestion();
  timeInterval = setInterval(startTimer, 1000);
}

// Initialized the timer once the "Start Quiz" is pressed.
// <div class="timer">Time: <span id="time">0</span></div> 
function startTimer() {
  timeRemaining--;
  document.querySelector("#time").textContent = timeRemaining;
  if (timeRemaining <= 0 || currentQuestion === quiz.length) {
    clearInterval(timeInterval);
    endQuiz();
  }

  // This timer does not stop.
  // setInterval(function(){ 
  //   timeRemaining--;
  //   // Display the timer to index.html
  //   document.querySelector("#time").textContent = timeRemaining;
  //   // I set the time remaining to 60 seconds and if hit 0 then call function endGame or highscore.html
  //   if (timeRemaining === 0) {
  //     endQuiz();
  //   }
  // }, 1000);
}

// Display questions array from the question.js 
function displayQuestion(){
  // Calling objects in question.js
  var currentQ = quiz[currentQuestion];

  // To unhide the element, change the display to block
  var unhideElement = document.querySelector("#questions");
  unhideElement.style.display = "block";

  var questionElement = document.querySelector("#question-title");
  questionElement.style.display = "block";
  
  // Reference: https://www.w3schools.com/js/js_json_stringify.asp
  // Re-watched Zoom Meeting with Dan about JSON stringify and how to use it to convert object to string.
  questionElement.textContent = JSON.stringify(currentQ.question);

  // Manipulate div "choices" and add a button to html.
  var answerElement = document.querySelector("#choices");
  answerElement.style.display = "block";
  answerElement.innerHTML="";
  // Create for loop to create buttons for answers array
  currentQ.answers.forEach(function(answer){
    var button = document.createElement("button");
    button.textContent = answer;

    // Add click event for selecting the answers.
    // Need to figure out how to display the submit button 2:02AM Friday
    // Need to start here first thing in the morning.
    button.addEventListener("click", function(){
      // if answers is equal to correctAnser in the array of question then return with score.
      if (answer === currentQ.correctAnswer) {
        score += 20;
        document.querySelector("#scoredisplay").textContent = score;
        
      } else {
        // If incorrect then -10 seconds (penalize).
        timeRemaining -= 10;
      }
      // To continue reading array, it will kept adding until it reached the max length.
      currentQuestion++;
      if (currentQuestion < quiz.length) {
        displayQuestion();
      } else {
        endQuiz();
      }
    });
    answerElement.appendChild(button);
  });
}

// To end the quiz. Once, the timer remaining hit 0 then show the final score.
function endQuiz() {
  // Reference: https://developer.mozilla.org/en-US/docs/Web/API/clearInterval
  var endScreen = document.querySelector("#end-screen");
  endScreen.style.display = "block";
  document.querySelector("#final-score").textContent = score;
}