// explore.js

window.addEventListener('DOMContentLoaded', init);

var voices = []

function init() {
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  var synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select")
  const inputTxt = document.getElementById("text-to-speak")
  const btn = document.querySelector("#explore button")
  const speechFace = document.querySelector("#explore img")
  btn.addEventListener('click', function(event) {
    event.preventDefault();

    var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
    for(var i = 0; i < voices.length ; i++) {
      if(voices[i].name === selectedOption) {
        utterThis.voice = voices[i];
      }
    }

    synth.speak(utterThis);
    inputTxt.blur();

    utterThis.onstart = function(){
      speechFace.src = "/assets/images/smiling-open.png";
    }
    utterThis.onend = function(){
      speechFace.src = "/assets/images/smiling.png";
    }
    
    
  });
  
}

function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }

  voices = speechSynthesis.getVoices();

  for(var i = 0; i < voices.length; i++) {
    var option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    if(voices[i].default) {
      option.textContent += ' -- DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}

