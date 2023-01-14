// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement
// It is not working.
function submitS() {
  var newitem = document.createElement("ol");
  // var newname = document.querySelector("#initials-name").value;

  var newname = document.createTextNode("This is not working");

  newitem.appendChild(newname);

  var currentHS = document.querySelector("#highscores");
  document.body.insertBefore(newitem, currentHS);
  
  // var nameList = document.getElementById("#highscores");
  // nameList.textContent(newListItem);
}

// var submitScore = document.querySelector("#submit");
// submitScore.addEventListener("click", function() {
//   var initials = document.getElementById("#initials").value;
//   var playerHighscores = document.querySelector("#highscores");
//   var list = document.createElement("li");
//   list.textContent = initials;
//   playerHighscores.appendChild(list);
// });