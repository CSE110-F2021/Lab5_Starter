// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    var choice = document.getElementById("horn-select");
    choice.addEventListener('change', changeImgAndSetAudio);
    
    var volume = document.getElementById("volume");
    volume.addEventListener('change', changeIconAndVol);

    var but = document.querySelector('button');
    but.addEventListener('click', playSoundAndJs);

  }
function playSoundAndJs(){
  var audioFun = document.querySelector(".hidden");
  var vol = document.getElementById("volume").value;
  var out = new Audio(audioFun.src);
  out.volume = vol / 100 ;
  out.play();
  var select = document.getElementById("horn-select").value;

  if ( select == 'party-horn' && vol != 0 ){
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti();
  }
}
  


function changeImgAndSetAudio(){
  var x = document.getElementById("horn-select").value;
  if ( x == 'air-horn' ){
    var y = document.querySelector('img[alt="No image selected"]');
    y.src = 'assets/images/air-horn.svg'
    var h = document.querySelector("audio");
    h.src = 'assets/audio/air-horn.mp3'

  }
  if ( x == 'car-horn' ){
    var y = document.querySelector('img[alt="No image selected"]');
    y.src = 'assets/images/car-horn.svg'
    var h = document.querySelector("audio");
    h.src = 'assets/audio/car-horn.mp3'
  }
  if ( x == 'party-horn' ){
    var y = document.querySelector('img[alt="No image selected"]');
    y.src = 'assets/images/party-horn.svg'
    var h = document.querySelector("audio");
    h.src = 'assets/audio/party-horn.mp3'
  }
}

function changeIconAndVol(){
  var vol = document.getElementById("volume").value;
  if( vol == 0 ){
    var z = document.querySelector('img[alt="Volume level 2"]');
    z.src = 'assets/icons/volume-level-0.svg'
  }
  if( vol > 0 && vol <33 ){
    var z = document.querySelector('img[alt="Volume level 2"]');
    z.src = 'assets/icons/volume-level-1.svg'
  }
  if( vol >= 33 && vol < 67 ){
    var z = document.querySelector('img[alt="Volume level 2"]');
    z.src = 'assets/icons/volume-level-2.svg'
  }
  if( vol >= 67 ){
    var z = document.querySelector('img[alt="Volume level 2"]');
    z.src = 'assets/icons/volume-level-3.svg'
  }
}