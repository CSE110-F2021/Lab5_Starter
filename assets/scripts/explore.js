// explore.js

window.addEventListener('DOMContentLoaded', init);

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

function makeSpeak(event){
  var talkingWindow = window.speechSynthesis;
  var wordsToSay = new SpeechSynthesisUtterance( document.getElementById("text-to-speak").value );
  
  var voices = talkingWindow.getVoices();
  var selectedOption = document.getElementById("voice-select").selectedOptions[0].getAttribute('data-name');
  for(var i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      wordsToSay.voice = voices[i];
    }
  }
  var imgFace = document.getElementsByTagName('img')[0];
  talkingWindow.speak( wordsToSay );

  wordsToSay.onstart = function(){
    imgFace.src = "assets/images/smiling-open.png";
  }
  wordsToSay.onend = function(){
    imgFace.src = "assets/images/smiling.png";
  }

}

function init() {
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // Say the words on button press
  document.getElementsByTagName('button')[0].addEventListener("click", makeSpeak );
}