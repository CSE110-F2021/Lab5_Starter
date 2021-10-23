// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  let listVoices;
  let voiceOptions;
  speechSynthesis.addEventListener("voiceschanged", event => {
    listVoices = speechSynthesis.getVoices();
    voiceOptions = document.getElementById('voice-select');

    
    for (let i=0; i<listVoices.length;i++) {
      let option = document.createElement('option');
      option.textContent=listVoices[i].name;
      voiceOptions.appendChild(option);
    }
  })

  
  let phrase = document.getElementById('text-to-speak');

  const button = document.querySelector('button');
  button.addEventListener('click', event => {
    let utterance = new SpeechSynthesisUtterance(phrase.value);
    let selected = voiceOptions.options[voiceOptions.selectedIndex].value;

    for(let i = 0; i < listVoices.length ; i++) {
      if(listVoices[i].name == selected) {
        utterance.voice = listVoices[i];
      }
    }
    
    speechSynthesis.speak(utterance);
    document.querySelector('section>img').src = "../assets/images/smiling-open.png";

    utterance.onend = function() {
      document.querySelector('section>img').src = "../assets/images/smiling.png";
    }
  });

}