// explore.js
// cite from MDN Web: https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
window.addEventListener('DOMContentLoaded', init);

var list = document.querySelector('select');
var voiceList =[];
var synth = window.speechSynthesis;





function init() {

    setTimeout(createVoiceList, 50);
    
    var but = document.querySelector('button');
    but.addEventListener('click', playSound);
}

function createVoiceList(){

    voiceList = synth.getVoices();

    for(var i = 0; i < voiceList.length; i++){
      var option = document.createElement('option');
      option.textContent = voiceList[i].name + ' (' + voiceList[i].lang + ')';

      if(voiceList[i].default){
        option.textContent += ' -- Default';
      }

      option.setAttribute('data-lang', voiceList[i].lang);
      option.setAttribute('data-name', voiceList[i].name);
      list.appendChild(option);
    }
}

function playSound(){

  var content = document.querySelector('textarea');
  var speech = new SpeechSynthesisUtterance(content.value);
  var choice = list.selectedOptions[0].getAttribute('data-name');
  //console.log(voiceList);

  for(var i = 0; i < voiceList.length; i++ ){
    
    //console.log(voiceList[i].name);
    //console.log(voiceList[i].name == choice);
    var value = voiceList[i].name;
    if( value === choice ){
      speech.voice = voiceList[i]
      
    }
  }
  //console.log(content.value);
  //console.log(speech.voice);
  //console.log(speech);
  
  synth.speak(speech);
  var x = document.querySelector('img[alt="Smiling face"]');
  x.src = 'assets/images/smiling-open.png';
  changeImage();
  
  content.blur();
}
function changeImage(){
  var isSpeaking = synth.speaking;
  if( !isSpeaking ){
    var y = document.querySelector('img[alt="Smiling face"]');
    y.src = 'assets/images/smiling.png';
  }else{
    setTimeout(changeImage,100);
    
  }

}

