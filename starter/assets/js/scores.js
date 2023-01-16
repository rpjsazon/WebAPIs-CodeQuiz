// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// It is not working.

var submitScore = document.getElementById("submitBtn");
submitScore.addEventListener("click", function() {
  // Navigate to highscore.html
  window.location.href = "highscores.html";

  // Save the name and score to the localStorage
  // Not working!
  localStorage.setItem("initials-name", initials);
  localStorage.setItem("score", score);

  // Once the submit button is clicked, get the element from initials-name value
  var insertName = document.querySelector("initials-name").value;
  
  // then, create element "ol"
  var newitem = document.createElement("ol");

  // then, insert the value of the initials name to the new created list.
  var newname = document.getElementById(insertName);
  newitem.appendChild(newname);

  // then, insert the name after the id: highscores
  var currentHS = document.querySelector("highscores");
  document.body.insertBefore(newitem, currentHS);
  
})

// var submitScore = document.querySelector("#submit");
// submitScore.addEventListener("click", function() {
//   var initials = document.getElementById("#initials").value;
//   var playerHighscores = document.querySelector("#highscores");
//   var list = document.createElement("li");
//   list.textContent = initials;
//   playerHighscores.appendChild(list);
// });