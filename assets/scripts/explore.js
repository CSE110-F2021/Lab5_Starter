// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  var selectedVoice;
  document.getElementById("voice-select").addEventListener('change', function() {
    selectedVoice = document.getElementById("voice-select").value;
  })

  document.querySelector("select + button").addEventListener('click', function() {
    if(selectedVoice == null)
      return;
    
    var voices = speechSynthesis.getVoices();
    var utter = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value);
    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name === selectedVoice) {
        utter.voice = voices[i];
      }
    }
    speechSynthesis.speak(utter);
    while(speechSynthesis.speaking) {
      document.querySelector("header + img").src = "assets/images/smiling-open.png";
    }
    document.querySelector("header + img").src = "assets/images/smiling.png";
  });
}

//populateVoiceList() from https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/getVoices
function populateVoiceList() {
  if(typeof speechSynthesis === 'undefined') {
    return;
  }

  var voices = speechSynthesis.getVoices();

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