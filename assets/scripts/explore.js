// explore.js

const synth = window.speechSynthesis;

let text;
let speakBtn;
let face;
let voiceList;

let voices = [];

window.addEventListener('DOMContentLoaded', init);

function init() {
  text = document.getElementById('text-to-speak');
  speakBtn = document.querySelector('button');
  face = document.querySelector('img');
  voiceList = document.querySelector('select');

  createVoiceList();
  
  speakBtn.addEventListener('click', speakText);

  setInterval(() => {
    if(synth.speaking) {
      face.src = "./assets/images/smiling-open.png";
    } else {
      face.src = "./assets/images/smiling.png";
    }

    if (synth.onvoiceschanged !== undefined) {
      synth.onvoiceschanged = createVoiceList;
    }
  });
}

function speakText() {
  console.log('speakText() being called');
  if(text.value != '') {
    let utterance = new SpeechSynthesisUtterance(text.value);

    let voiceSelected = voiceList.selectedOptions[0].getAttribute('data-name');
    for(let i = 0; i < voices.length; i++) {
      if(voices[i].name === voiceSelected) {
        utterance.voice = voices[i];
        break;
      }
    }

    speechSynthesis.speak(utterance);
  }
}

function createVoiceList() {
  voices = synth.getVoices();

  for(let i = 0; i < voices.length ; i++) {
    let option = document.createElement('option');
    option.textContent = voices[i].name + ' (' + voices[i].lang + ')';

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);

    voiceList.appendChild(option);
  }
}