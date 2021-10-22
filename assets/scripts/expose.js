// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById('horn-select');
  const volumeInput = document.querySelector('input');
  let audio;
  let hornType;

  selectElement.addEventListener('change', (event) => {
    hornType = event.target.value;
    document.querySelector('section>img').src = "../assets/images/" + hornType + '.svg';
    audio = new Audio("../assets/audio/" + hornType + '.mp3');
  });

  volumeInput.addEventListener('input', updateValue);

  function updateValue(e) {
    let vol = e.target.value;
    audio.volume = vol/100.0;
    if(vol < 1) {
      document.querySelector('div>img').src = "../assets/icons/volume-level-0.svg";
    }
    else if (vol<33) {
      document.querySelector('div>img').src = "../assets/icons/volume-level-1.svg";
    }
    else if (vol<67) {
      document.querySelector('div>img').src = "../assets/icons/volume-level-2.svg";
    }
    else {
      document.querySelector('div>img').src = "../assets/icons/volume-level-3.svg";
    }
  }

  const button = document.querySelector('button');

  button.addEventListener('click', event => {
    console.log(event.detail);
    audio.play();
    if(hornType == 'party-horn') {
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}

