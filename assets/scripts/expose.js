// expose.js

window.addEventListener("DOMContentLoaded", init);
const jsConfetti = new JSConfetti({ window });

function init() {
  // TODO
  const imgSrc = document.querySelectorAll("img");

  optionSelector(imgSrc);
  volumeControl(imgSrc);

  audioPlay();
}

function optionSelector(imgSrc) {
  const horns = document.getElementById("horn-select");

  horns.addEventListener("change", (e) => {
    var val = e.target.value;

    if (val == "air-horn") {
      imgSrc[0].src = "assets/images/air-horn.svg";
      document.getElementsByClassName("hidden")[0].src =
        "assets/audio/air-horn.mp3";
    } else if (val == "car-horn") {
      imgSrc[0].src = "assets/images/car-horn.svg";
      document.getElementsByClassName("hidden")[0].src =
        "assets/audio/car-horn.mp3";
    } else {
      imgSrc[0].src = "assets/images/party-horn.svg";
      document.getElementsByClassName("hidden")[0].src =
        "assets/audio/party-horn.mp3";
    }
  });
}

function volumeControl(imgSrc) {
  const volCont = document.querySelector("#volume-controls");
  let audio = document.getElementsByClassName("hidden");

  volCont.addEventListener("change", (e) => {
    let volume = e.target.value;
    console.log(volume);

    if (volume == 0) {
      imgSrc[1].src = "assets/icons/volume-level-0.svg";
    } else if (volume > 1 && volume <= 33) {
      imgSrc[1].src = "assets/icons/volume-level-1.svg";
    } else if (volume > 33 && volume < 67) {
      imgSrc[1].src = "assets/icons/volume-level-2.svg";
    } else {
      imgSrc[1].src = "assets/icons/volume-level-3.svg";
    }
    audio[0].volume = 0.01 * volume;
  });
}

function audioPlay() {
  const audioBtn = document.querySelector("button");
  let audio = document.getElementsByClassName("hidden");

  audioBtn.addEventListener("click", (e) => {
    var optionSrc = document.getElementsByClassName("hidden")[0].src;
    audio[0].play();
    console.log(optionSrc);
    if (optionSrc.includes("assets/audio/party-horn.mp3")) {
      jsConfetti.addConfetti();
    }
  });
}
