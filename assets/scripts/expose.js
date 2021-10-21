// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  document.getElementById("horn-select").addEventListener('change', changeImageAudio);
  document.getElementById("volume").addEventListener('input', changeVolume);
  const jsConfetti = new JSConfetti()
  document.querySelector('button').addEventListener('click',playSound);

  function changeImageAudio(e) {
    if (e.target.value == "air-horn"){
       document.querySelector('img').src = "assets/images/air-horn.svg"
       document.querySelector('img').alt = "Air Horn Image";
       document.querySelector("audio").src = "assets/audio/air-horn.mp3";
    }
    if (e.target.value == "car-horn"){
      document.querySelector('img').src = "assets/images/car-horn.svg";
      document.querySelector('img').alt = "Car Horn Image";
      document.querySelector("audio").src = "assets/audio/car-horn.mp3";
    }
    if (e.target.value == "party-horn"){
      document.querySelector('img').src = "assets/images/party-horn.svg";
      document.querySelector('img').alt = "Party Horn Image";
      document.querySelector("audio").src = "assets/audio/party-horn.mp3";
    }
  }

  function changeVolume(e){
     document.querySelector("audio").volume = e.target.value/100
     if (e.target.value == 0){
        document.querySelectorAll('img')[1].src = "assets/icons/volume-level-0.svg"
        document.querySelectorAll('img')[1].alt = "Volume Level 0"
     }
     else if (e.target.value > 0 && e.target.value < 33 ){
      document.querySelectorAll('img')[1].src = "assets/icons/volume-level-1.svg"
      document.querySelectorAll('img')[1].alt = "Volume Level 1"
     }
     else if (e.target.value > 32 && e.target.value < 67 ){
      document.querySelectorAll('img')[1].src = "assets/icons/volume-level-2.svg"
      document.querySelectorAll('img')[1].alt = "Volume Level 2"
     }
     else{
      document.querySelectorAll('img')[1].src = "assets/icons/volume-level-3.svg"
      document.querySelectorAll('img')[1].alt = "Volume Level 3"
     }
  }

  function playSound(){
    document.querySelector("audio").play();
    if (document.querySelector('img').alt == "Party Horn Image"){
      jsConfetti.addConfetti()
    }
  }
  
  
  //(event)  => {
    //if event.target.value == "air-horn"{
      //document.querySelector("img").src = "assets/images/party-horn.svg"
    //}


    // code to run when the event is triggered
  
  //})
}