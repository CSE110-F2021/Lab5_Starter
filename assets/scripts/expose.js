// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var select = document.getElementById('horn-select');
  var volume = document.getElementById('volume');
  const img = document.querySelector('img');
  const icon = document.getElementById('volume_controls').getElementsByTagName('img');
  select.addEventListener('change', setHorn);
  volume.addEventListener('volume', setVolume);

  function setVolume() {
    var vol = volume.value;
    if(vol == 0){
      icon.src = 'assets/icons/volume-level-0.svg'
    } else if(vol < 33){
      icon.src = 'assets/icons/volume-level-1.svg'
    } else if(vol < 67){
      icon.src = 'assets/icons/volume-level-2'
    } else{
      icon.src = 'assets/icons/volume-level-3'
    }
  }

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