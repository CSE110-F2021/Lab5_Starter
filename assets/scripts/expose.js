// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const hornDropdown = document.getElementById('horn-select');
  const audio = document.querySelector("[class='hidden']");
  const photo = document.querySelector("[alt='No image selected']");
  const volumeRange = document.getElementById('volume');
  const icon = document.querySelector("[alt='Volume level 2']");
  const button = document.getElementsByTagName('button')[0];
  const jsConfetti = new JSConfetti()

  hornDropdown.addEventListener('input', (e) => {
    const value = e.target.value;
    if(value === 'car-horn') {
      audio.setAttribute('src', '/assets/audio/car-horn.mp3');
      photo.src = '/assets/images/car-horn.svg';
    } else if(value === 'air-horn') {
      audio.setAttribute('src', '/assets/audio/air-horn.mp3');
      photo.src = '/assets/images/air-horn.svg';
    } else {
      audio.setAttribute('src', '/assets/audio/party-horn.mp3');
      photo.src = '/assets/images/party-horn.svg';
    }
  });

  volumeRange.addEventListener('input', (e) => {
    const value = e.target.value;

    if(value > 66) {
      icon.src = "/assets/icons/volume-level-3.svg";
    } else if (value > 33) {
      icon.src = "/assets/icons/volume-level-2.svg";  
    } else if (value > 0) {
      icon.src = "/assets/icons/volume-level-1.svg";
    } else {
      icon.src = "/assets/icons/volume-level-0.svg";
    }
  });

  button.addEventListener('click', (e) => {
    console.log(volumeRange.value);
    audio.volume = volumeRange.value / 100;
    audio.play();
    jsConfetti.addConfetti()
  })


}