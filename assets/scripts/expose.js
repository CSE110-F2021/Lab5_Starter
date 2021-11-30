// expose.js

const jsConfetti = new JSConfetti()

let volumeSlider;
let hornVolume;
let speakerImage;
let hornImage;
let hornSelector;
let hornAudio;
let playAudioBtn;
let hornType;

window.addEventListener('DOMContentLoaded', init);

function init() {
  volumeSlider = document.getElementById('volume');
  speakerImage = document.querySelector('input + img');

  hornImage = document.querySelector("#expose > img");
  hornSelector = document.getElementById('horn-select');
  hornAudio = document.querySelector('audio');
  playAudioBtn = document.querySelector('button');

  volumeSlider.oninput = function() {
    changeSpeakerPic(this.value);
  }

  hornSelector.addEventListener('change', changeHorn);
  console.log(hornSelector);

  playAudioBtn.addEventListener('click', playHornAudio);
  console.log(hornAudio.src);
}

function changeSpeakerPic(volume) {
  hornAudio.volume = volume / 100;
  if(volume >= 67) {
    speakerImage.src = "./assets/icons/volume-level-3.svg";
  } else if(volume >= 33) {
    speakerImage.src = "./assets/icons/volume-level-2.svg";
  } else if(volume >=  1) {
    speakerImage.src = "./assets/icons/volume-level-1.svg";
  } else {
    speakerImage.src = "./assets/icons/volume-level-0.svg";
  }
}

function changeHorn(horn) {
  hornType = horn.target.value;
  hornImage.src = `./assets/images/${horn.target.value}.svg`;
  hornAudio.src = `./assets/audio/${horn.target.value}.mp3`;
  // if(horn.target.value === "party-horn") {
  //   jsConfetti.addConfetti();
  // }
  console.log(hornImage, hornAudio.volume);
}

function playHornAudio() {
  if(hornType === "party-horn") {
    jsConfetti.addConfetti();
  }
  hornAudio.play();
}