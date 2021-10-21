// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var hornSelect = document.getElementById("horn-select");
  var hornSound = document.querySelector("audio.hidden");
  hornSelect.addEventListener('change', function(val) {
    const hornImage = document.querySelector("#expose img");
    switch (val.target.value) {
      case "air-horn":
        hornImage.src = "/assets/images/air-horn.svg"
        hornSound.src = "/assets/audio/air-horn.mp3"
        break;
      case "car-horn":
        hornImage.src = "/assets/images/car-horn.svg"
        hornSound.src = "/assets/audio/car-horn.mp3"
        break;
      case "party-horn":
        hornImage.src = "/assets/images/party-horn.svg"
        hornSound.src = "/assets/audio/party-horn.mp3"
        break;
      default:
        hornImage.src = "/assets/images/no-image.png"
        hornSound.src = ""
    }
  });

  var volume = document.getElementById("volume");
  const volumeImage = document.querySelector("#volume-controls img");
  volume.addEventListener('change', function(val) {
    if (val.target.value == 0)
      volumeImage.src = "/assets/icons/volume-level-0.svg";
    else if (val.target.value < 33)
      volumeImage.src = "/assets/icons/volume-level-1.svg";
    else if (val.target.value < 67)
      volumeImage.src = "/assets/icons/volume-level-2.svg";
    else
      volumeImage.src = "/assets/icons/volume-level-3.svg";

    hornSound.volume = val.target.value/100;
  });

  const jsConfetti = new JSConfetti();
  var btn = document.querySelector("#expose button");
  btn.addEventListener('click', function() {
    hornSound.play();
    if (hornSound.src.endsWith("/assets/audio/party-horn.mp3"))
      jsConfetti.addConfetti();
  })


}