// expose.js

window.addEventListener('DOMContentLoaded', init);


function setHorn(event){
  var hornImage = document.getElementsByTagName("img")[0];
  hornImage.setAttribute("src", "assets/images/" + event.target.value + ".svg");

  var hornAudio = document.getElementsByClassName("hidden")[0];
  hornAudio.setAttribute("src", "assets/audio/" + event.target.value + ".mp3"); 
} 

function setVolume(event){
  var volumeValue = document.getElementById("volume").value;
  var volumeIcon = document.getElementsByTagName("img")[1];
  playSound();
  if( volumeValue == 0){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-0.svg");  
  }
  else if( volumeValue >= 1 && volumeValue < 33){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-1.svg");  
  }
  else if( volumeValue >= 33 && volumeValue < 67){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-2.svg");  
  }
  else if( volumeValue >= 67){
    volumeIcon.setAttribute("src", "assets/icons/volume-level-3.svg");  
  } 
}

function playSound(){
  var volumeValue = document.getElementById("volume").value;
  var volumeLevel = document.getElementById("volume");
  volumeLevel.volume = volumeValue/100;
  console.log(volumeLevel.volume);
}

function init() {
  // TODO
  document.getElementById("horn-select").addEventListener('change', setHorn);
  document.getElementById("volume-controls").addEventListener('change', setVolume);
}