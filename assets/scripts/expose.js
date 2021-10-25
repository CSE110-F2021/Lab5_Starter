// expose.js

// confetti woo
const jsConfetti = new JSConfetti();

window.addEventListener('DOMContentLoaded', init);

function init() {
  let hornSelect = document.querySelector('#horn-select');
  let audioEl = document.querySelector('audio');
  let volumeControl = document.querySelector('#volume');
  let volIcon = document.querySelectorAll("img")[1];
  let playButton = document.querySelector("button");
  let confetti = false;

  // horn image handling
  hornSelect.addEventListener('change', function() {
    let picture = document.querySelector("img");
    let message;
  
      switch (this.value) {
        case 'air-horn':
          picture.src = "assets/images/air-horn.svg";
          audioEl.src = "assets/audio/air-horn.mp3";
          confetti = false;
          break;
        case 'car-horn':
          picture.src = "assets/images/car-horn.svg";
          audioEl.src = "assets/audio/car-horn.mp3";
          confetti = false;
          break;
        case 'party-horn':
          picture.src = "assets/images/party-horn.svg";
          audioEl.src = "assets/audio/party-horn.mp3";
          confetti = true;
          break;
        default:
          picture.src = "assets/images/air-horn.svg";
          break;
      }
    });

  // volume icon handling
  volumeControl.addEventListener('change', function() {
    audioEl.volume = this.value / 100;
    if (this.value == 0) {
      volIcon.src = "assets/icons/volume-level-0.svg";
    }
    else if (this.value < 33) {
      volIcon.src = "assets/icons/volume-level-1.svg";
    }
    else if (this.value < 67) {
      volIcon.src = "assets/icons/volume-level-2.svg";
    }
    else {
      volIcon.src = "assets/icons/volume-level-3.svg";
    }
  });

  // play sound handling
  playButton.addEventListener('click', function() {
    audioEl.play();
    if (confetti && volumeControl.value > 0){
      jsConfetti.addConfetti();
    }
  });

}