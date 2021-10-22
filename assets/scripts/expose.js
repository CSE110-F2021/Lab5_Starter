// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const images = document.querySelectorAll('img');

  const hornImage = images[0];
  const volumeImage = images[1];

  const hornSelector = document.getElementById('horn-select');
  const volumeControls = document.getElementById('volume');

  const audio = document.querySelector('audio');
  const playButton = document.querySelector('button')

  const jsConfetti = new JSConfetti()
  let activeHorn = ''

  const onSelectChange = () => {
    activeHorn = hornSelector.value;

    hornImage.src = `assets/images/${activeHorn}.svg`;
    audio.src = `assets/audio/${activeHorn}.mp3`;
  };
  hornSelector.addEventListener('change', onSelectChange)

  const onVolumeChange = () => {
    const value = volumeControls.value;

    const tier = Math.ceil(3*value/100);
    volumeImage.src = `assets/icons/volume-level-${tier}.svg`

    audio.volume = value / 100;
  };
  volumeControls.addEventListener('input', onVolumeChange);


  const onPlayClicked = () => {
    if (activeHorn === 'party-horn') {
      jsConfetti.addConfetti({
        emojis: [ '🌸', '🌷', '🌼', '🌻', '🌺', '🏵️'],
        confettiNumber: 250,
      })
      
    }
    audio.play()
  }
  playButton.addEventListener('click', onPlayClicked);
}