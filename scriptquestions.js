//script to display the answers
document.getElementById("buttonQuestions").onclick = function() {myButtonFunction()};
function myButtonFunction(){
  document.getElementById("myAnswers").classList.toggle("show");
}