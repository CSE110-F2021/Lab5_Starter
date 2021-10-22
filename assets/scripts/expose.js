// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO

  var selection = document.getElementById("horn-select");
  const button = document.querySelector("button");
  var volume = document.getElementById("volume");

  var image = document.querySelector("img[src='assets/images/no-image.png']");
  var audio = document.querySelector("audio[src='']");
  var sound = document.querySelector("img[src='assets/icons/volume-level-2.svg']");
  
  selection.addEventListener('change', imageChange);
  button.addEventListener('click', playAudio);
  volume.addEventListener('change', volumeChange);

  function imageChange() {
    if (selection.selectedOptions[0].value == "air-horn") {
      image["src"] = "assets/images/air-horn.svg";
      audio["src"] = "assets/audio/air-horn.mp3";
    }
    if (selection.selectedOptions[0].value == "car-horn") {
      image["src"] = "assets/images/car-horn.svg";
      audio["src"] = "assets/audio/car-horn.mp3";
    }
    if (selection.selectedOptions[0].value == "party-horn") {
      image["src"] = "assets/images/party-horn.svg";
      audio["src"] = "assets/audio/party-horn.mp3";
    }
  }

  function playAudio() {
    audio.play();
  }

  function volumeChange() {
    if (volume.value == "0")
      sound["src"] = "assets/icons/volume-level-0.svg";
    if (volume.value > 0 && volume.value < 33)
      sound["src"] = "assets/icons/volume-level-1.svg";
    if (volume.value > 32 && volume.value < 67)
      sound["src"] = "assets/icons/volume-level-2.svg";
    if (volume.value > 66)
      sound["src"] = "assets/icons/volume-level-3.svg";
  }
}