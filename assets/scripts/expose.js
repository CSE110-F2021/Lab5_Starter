// expose.js

window.addEventListener('DOMContentLoaded', init);

function changeImg(event){
  var imgHorn = document.getElementsByTagName('img')[0];
  imgHorn.src = "assets/images/" + event.target.value + ".svg";
  var audioHorn = document.getElementsByTagName('audio')[0];
  audioHorn.src = "assets/audio/" + event.target.value + ".mp3";
}
function playSound(jsConfetti){
  if( document.getElementById("horn-select").value == "party-horn" ){
    jsConfetti.addConfetti();
  }
  document.getElementsByTagName('audio')[0].play();
}
function changeVol(event){
  var imgVol = document.getElementsByTagName('img')[1];
  var audioHorn = document.getElementsByTagName('audio')[0];
  audioHorn.volume = event.target.value / 100;
  if( event.target.value == 0 ){
    imgVol.src = "assets/icons/volume-level-0.svg";
  }
  else if( event.target.value >= 1 && event.target.value < 33){
    imgVol.src = "assets/icons/volume-level-1.svg";
  }
  else if( event.target.value >= 33 && event.target.value < 67){
    imgVol.src = "assets/icons/volume-level-2.svg";
  }
  else if( event.target.value >= 67){
    imgVol.src = "assets/icons/volume-level-3.svg";
  }
}

function init() {
  // initailize confetti 
  const jsConfetti = new JSConfetti()
  // select horn
  document.getElementById("horn-select").addEventListener("change", changeImg );
  // select volume
  document.getElementById("volume").addEventListener("change", changeVol );
  // play sound and confetti sometimes
  document.getElementsByTagName('button')[0].addEventListener('click', () => {
    playSound(jsConfetti);
  })
}


