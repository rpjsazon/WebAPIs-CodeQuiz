// Reference: https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem
var submitScore = document.querySelector("#submit");
submitScore.addEventListener("click", function() {
  
  window.location.href = "./highscores.html";
  var displayPlayer = document.createElement('div');
  var initials = document.getElementById("#initials").value;
  localStorage.setItem("initials", initials);
  localStorage.setItem("score", score);
});