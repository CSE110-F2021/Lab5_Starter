// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  var synth = window.speechSynthesis;
  var voices = synth.getVoices();
  loadVoices();
  document.querySelector('button').addEventListener('click', Speak);

  function loadVoices() {
    for(var i = 0; i < voices.length; i++) {
      var voice = voices[i]
      var element = document.createElement('option')
      element.textContent = voice.name + ' (' + voice.lang +')';
      element.value = voice.name;
      document.querySelector('select').appendChild(element);
    }
  }

  function Speak() {
      var utterance = new SpeechSynthesisUtterance(document.getElementById("text-to-speak").value)
      document.querySelector('img').src = "assets/images/smiling-open.png"
      document.querySelector('img').alt = "Smiling Open Image";
      utterance.addEventListener('end', function(event) {
        document.querySelector('img').src = "assets/images/smiling.png";
        document.querySelector('img').alt = "Smiling Image"; })
      for (var i=0; i<voices.length; i++ ){
        if(voices[i].name == document.querySelector('select').value){
          utterance.voice = voices[i];
        }
      } 
      synth.speak(utterance);  
    }
}