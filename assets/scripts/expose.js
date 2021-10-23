// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  const imgSrc = document.querySelectorAll("img");

  optionSelector(imgSrc);
  volumeControl(imgSrc);
}
function optionSelector(imgSrc) {
  const horns = document.getElementById("horn-select");

  horns.addEventListener("change", (e) => {
    var val = e.target.value;
    // var src = e.target.src;

    if (val == "air-horn") {
      imgSrc[0].src = "assets/images/air-horn.svg";
      document.getElementsByClassName("hidden").src =
        "assets/audio/air-horn.mp3";
    } else if (val == "car-horn") {
      imgSrc[0].src = "assets/images/car-horn.svg";
      document.getElementsByClassName("hidden").src =
        "assets/audio/car-horn.mp3";
    } else {
      imgSrc[0].src = "assets/images/party-horn.svg";
      document.getElementsByClassName("hidden").src =
        "assets/audio/party-horn.mp3";
    }
  });
}
function volumeControl(imgSrc) {
  var vol = document.getElementById("volume");
  const input = document.querySelectorAll("input");
  console.log(`${vol.value}`);
  // console.log(`${input.value}`);

  if (input.value == 0) {
    imgSrc[1].src = "assets/icons/volume-level-0.svg";
  }
}
