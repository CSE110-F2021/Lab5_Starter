// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let sound = null;
  document.querySelector("button + audio").volume = 0.5;

  document.getElementById("horn-select").addEventListener('input', function() {
    sound = document.getElementById("horn-select").value;
    if(sound == 'air-horn') {
      document.querySelector("header + img").src = "assets/images/air-horn.svg";
      document.querySelector("button + audio").src = "assets/audio/air-horn.mp3";
    } else if (sound == 'car-horn') {
      document.querySelector("header + img").src = "assets/images/car-horn.svg";
      document.querySelector("button + audio").src = "assets/audio/car-horn.mp3";
    } else {
      document.querySelector("header + img").src = "assets/images/party-horn.svg";
      document.querySelector("button + audio").src = "assets/audio/party-horn.mp3";
    }
  });
  
  document.getElementById("volume-controls").addEventListener('change', function() {
    let level = document.getElementById("volume").value;
    if(level == 0) {
      document.querySelector("div img").src = "assets/icons/volume-level-0.svg";
    } else if(level < 32) {
      document.querySelector("div img").src = "assets/icons/volume-level-1.svg";
    } else if(level >= 33 && level < 67) {
      document.querySelector("div img").src = "assets/icons/volume-level-2.svg";
    } else {
      document.querySelector("div img").src = "assets/icons/volume-level-3.svg";
    }

    document.querySelector("button + audio").volume = level / 100.0;
  });
  
  document.querySelector('button').addEventListener('click', function() {
    if(sound == null)
      return;
    
    document.querySelector("button + audio").play();
    if(sound == 'party-horn') {
      //also do confetti
    }
  });
}