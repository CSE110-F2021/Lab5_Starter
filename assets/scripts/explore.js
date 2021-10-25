// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var voiceSelect = document.getElementById('voice-select');
  var inputTxt = document.getElementById('text-to-speak');
  var button = document.querySelector("button");

  var voices = [];
  var image = document.querySelector("img");

  function voiceListPopulator(){
    voices = synth.getVoices();

    for(var i = 0; i < voices.length ; i++) {
      var option = document.createElement('option');
      option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  
      if(voices[i].default) {
        option.textContent += ' -- DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceSelect.appendChild(option);
    }
  }
  voiceListPopulator();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = voiceListPopulator;
  }

  button.onclick = function(event) {
    console.log("pressed button");
    event.preventDefault();
  
    var textToSpeech = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        textToSpeech.voice = voices[i];
      }
    }
    synth.speak(textToSpeech);

    if(synth.speaking){
      image.src = "/assets/images/smiling-open.png";
    }
  
    textToSpeech.onend = function(event){
      image.src = "/assets/images/smiling.png";
    }
  
    inputTxt.blur();

  }


}
