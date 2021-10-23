// expose.js

window.addEventListener("DOMContentLoaded", init);

function init() {
  // TODO
  optionSelector();
  // var button = document.querySelectorAll("button");
  // button[0].onclick = setAudio;
}
function optionSelector() {
  const horns = document.getElementById("horn-select");
  var imgSrc = document.querySelectorAll("img");

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
function setAudio() {
  document.getElementsByClassName("hidden").src = "assets/audio/air-horn.mp3";
}
