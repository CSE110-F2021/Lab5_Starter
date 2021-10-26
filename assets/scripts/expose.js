window.addEventListener('DOMContentLoaded', init);
function init(){
var docuSele = document.getElementById("horn-select");
var image = document.querySelector("img");
var vol = document.querySelector("audio");
//var seleImg = document.getElementsByID('here');
docuSele.addEventListener("change",(event) => {
  let tagg = event.target.value;
  if(tagg=="air-horn"){
    image.src = "assets/images/air-horn.svg";
    vol.src = "assets/audio/air-horn.mp3";

  }
  else if(tagg=="car-horn"){
    image.src = "assets/images/car-horn.svg";
    vol.src = "assets/audio/car-horn.mp3";
  }
  else{
  image.src = "assets/images/party-horn.svg";
  vol.src = "assets/audio/party-horn.mp3";
  }

  ;});

//change audio
 var volcon = document.getElementById("volume-controls");
 var imgOfVolCon = volcon.querySelector("img")
var button = document.querySelector("botton");
  var volumeSet = document.getElementById("volume");
volcon.addEventListener("change", (event) => {
  var volumeH = event.target.value;
  if(volumeH == 0){
    vol.volume = volumeH/100;
    imgOfVolCon.src = "assets/icons/volume-level-0.svg";
  }
  else if(volumeH < 33){
    vol.volume =volumeH/100;
    imgOfVolCon.src = "assets/icons/volume-level-1.svg";

  }
  else if(volumeH < 67){
    vol.volume = volumeH/100;
    imgOfVolCon.src = "assets/icons/volume-level-2.svg";

  }
  else {
    vol.volume = volumeH/100;
    imgOfVolCon.src = "assets/icons/volume-level-3.svg";
  }
})
const jsCon = new JSConfetti();
button.addEventListener("click", (event) => {
  if(docuSele.value == "party-horn" && vol.volume > 0)
  {
    jsCon.addConfetti();
    vol.play();

  }
})



}
