// expose.js

window.addEventListener('DOMContentLoaded', init);
var jsConfetti = new JSConfetti();

function init() {
  //variable declaration 
  var select = document.getElementById('horn-select');
  var volume = document.getElementById('volume');
  var img = document.querySelector('img');
  var icon = document.querySelector("img[alt='Volume level 2']");
  var audio = document.querySelector('audio');
  var button = document.querySelector('button');
  

  //EventListener
  select.addEventListener('change', setHorn);
  volume.addEventListener('input', setVolume);
  button.addEventListener('click', playSound);

  //function to adjust audio source and play audio
  function playSound(){
    var choice = select.value;
    if(choice === 'air-horn'){
      audio.src = 'assets/audio/air-horn.mp3'
    } else if (choice === 'car-horn'){
      audio.src = 'assets/audio/car-horn.mp3'
    } else  {
      audio.src = 'assets/audio/party-horn.mp3';
      jsConfetti.addConfetti();
    }
    audio.load();
    audio.play();
  }

  //function to adjust audio volume
  function setVolume() {
    var vol = parseInt(volume.value);
    audio.volume = vol/100;
    if(vol == 0){
      icon.src = 'assets/icons/volume-level-0.svg'
    } else if(vol < 33){
      icon.src = 'assets/icons/volume-level-1.svg'
    } else if(vol < 67){
      icon.src = 'assets/icons/volume-level-2.svg'
    } else{
      icon.src = 'assets/icons/volume-level-3.svg'
    }
  }

  //function to set images based on horn selection
  function setHorn() {
    var choice = select.value;
    if(choice === 'air-horn'){
      img.src = 'assets/images/air-horn.svg'
    } else if (choice === 'car-horn'){
      img.src = 'assets/images/car-horn.svg'
    } else  {
      img.src = 'assets/images/party-horn.svg'
    }
  }

}