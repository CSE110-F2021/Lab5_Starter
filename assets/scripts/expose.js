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
 var volcon = document.getElementById("volume-controls");
 var imgOfVolCon = volcon.querySelector("img")
var button = document.querySelector("botton");
volcon.addEventListener('change', (event) => {
  if(volcon == 0){
    imgOfVolCon.src = 'assets/icons/volume-level-0.svg';
  }
  else if(volcon < 33){
    imgOfVolCon.src = 'assets/icons/volume-level-1.svg';

  }
  else if(volcon < 67){
    imgOfVolCon.src = 'assets/icons/volume-level-2.svg';

  }
  else {
    imgOfVolCon.src = 'assets/icons/volume-level-3.svg';

  }
})
const jsCon = new JSConfetti();
button.addEventListener('click', (event) => {
  if(tagg == 'party-horn')
    jsCon.addConfetti();
})



}

