// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const volumnChoose = document.getElementById('volume');
  var allImg = document.querySelector('img');

  volumnChoose.addEventListener('change', (event) => {
    const v = Number(event.Target.value);
    var vImg = allImg[1];
    if(v === 0){
      vImg.src = 'assets/icons/volume-level-0.svg';
    }
    else if(v < 33){
      vImg.src = 'assets/icons/volume-level-1.svg';
    }
    else if(v < 67){
      vImg.src = 'assets/icons/volume-level-2.svg';
    }
    else{
      vImg.src = 'assets/icons/volume-level-3.svg';
    }
  })
  }