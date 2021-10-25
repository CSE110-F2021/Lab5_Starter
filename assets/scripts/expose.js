// expose.js
window.addEventListener('DOMContentLoaded', init);
function init(){
var docuSele = document.getElementById("horn-select");
var image = document.querySelector("img");
//var seleImg = document.getElementsByID('here');
docuSele.addEventListener('change',(event) => {
  let tagg = event.target.value;
  if(tagg=='air-horn'){
    image.src = 'assets/images/air-horn.svg';
  }
  else if(tagg=='car-horn'){
    image.src = 'assets/images/car-horn.svg';
  }
  else
  image.src = 'assets/images/party-horn.svg';
  ;});

  var vol = document.getElementById("audio");
  docuSele.addEventListener('change',(event) => {
    let volTagg = event.target.value;
    if(volTagg=='air-horn'){
      vol.src = 'assets/audio/air-horn.svg';
    }
    else if(tagg=='car-horn'){
      vol.src = 'assets/audio/car-horn.svg';
    }
    else
    vol.src = 'assets/audio/party-horn.svg';
    ;});
//const log = document.getElementById('horn-select');

//change audio
var button = document.querySelector("botton");
const jsCon = new JSConfetti();
button.addEventListener('click', (event) => {
  jsCon.addConfetti();
})



}

