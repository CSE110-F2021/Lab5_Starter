// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let audio = document.getElementsByClassName('hidden');
  const horn_selection = document.getElementById("horn-select");
  horn_selection.addEventListener("change",(event)=>{
    let chosen = event.target.value;
    let img = document.querySelector('img');
    audio.item(0).src = "/assets/audio/" + chosen + ".mp3";
    img.src = "/assets/images/" + chosen + ".svg";
  });

  let volume = 0;
  const vol_setting = document.getElementById("volume-controls");
  const vol_val = vol_setting.querySelector("[type ='range']");
  const vol_pic = vol_setting.querySelector("img");
  vol_val.addEventListener("change",(event)=>{
    volume = event.target.value;
    if(volume < 1){
      vol_pic.src = "/assets/icons/volume-level-0.svg";
    }
    else if(volume < 33){
      vol_pic.src = "/assets/icons/volume-level-1.svg";
    }
    else if(volume < 67){
      vol_pic.src = "/assets/icons/volume-level-2.svg";
    }
    else{
      vol_pic.src = "/assets/icons/volume-level-3.svg";
    }
  });

  const play_sound = document.querySelector("button");
  play_sound.addEventListener("click",(event)=>{
    let audio = document.getElementsByClassName("hidden");
    //console.log(audio);
    audio.item(0).volume = volume / 100;
    console.log(audio.item(0).volume);
    audio.item(0).play();
  })
}