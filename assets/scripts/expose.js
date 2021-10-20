// expose.js

window.addEventListener('DOMContentLoaded', init);

//document.title = "CSE110"; //This line was added by joe for testing purpose

function setImage(event){
  var hornImage = document.getElementsByTagName('img')[0];
  hornImage.setAttribute("src", "assets/images/" + event.target.value + ".svg");
} 

function init() {
  // TODO
  
  var hornType = document.getElementById("horn-select");
  hornType.addEventListener('click', setImage);
}