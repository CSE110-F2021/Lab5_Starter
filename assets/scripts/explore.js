// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  const button = document.querySelector('button');
  const image = document.querySelector('img');
  const select = document.getElementById('voice-select');
  const textArea = document.getElementById('text-to-speak');
  const synth = window.speechSynthesis;

  synth.addEventListener("voiceschanged", () => {
    const voices = speechSynthesis.getVoices();
    if(voices.length !== 0) {
      for(var i = 0; i < voices.length; i++) {
        const voiceOption = document.createElement('option');
        voiceOption.textContent = voices[i].name;
        voiceOption.setAttribute('data-name', voices[i].name);
        document.getElementById("voice-select").appendChild(voiceOption);
      }
    }
  });

  button.addEventListener('click', (e) => {
    const voices = synth.getVoices();
    // if no value, then say default message
    const text = textArea.value ? textArea.value : "hello, please input some text";
    const name = select.value;
    let utterance = new SpeechSynthesisUtterance(text);
    utterance.voice = findVoice(name, voices);
    synth.speak(utterance);

    // change to talking image when speaking
    utterance.onstart = function(event) {
      console.log('here');
      image.src = "assets/images/smiling-open.png";
    }

    // go back to original image
    utterance.onend = function(event) {
      image.src = "assets/images/smiling.png";
    }
  });

  const findVoice = (name, voices) => (
    voices.filter(voice => voice.name === name)[0]
  );

}