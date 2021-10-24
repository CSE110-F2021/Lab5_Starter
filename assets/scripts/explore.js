// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;
/**
 * On page load, all of the available voices that you can use 
 * for your SpeechSynthesizer should be loaded and populate 
 * the “Select Voice” dropdown. (These are browser specific, 
 * so you might get different ones browser to browser).
 * 
When you click the “Press to Talk” button, the following 
should happen:
    The text that you have typed into the “Text to speak here” 
textarea should be spoken out loud using the voice that you 
have selected

Only while the synthesizer is speaking, the face should swap 
to being open mouthed (included in the images folder)
Note: There is no event for Start / End of the speech 
synthesis, so it might take something a little clever
 using the SpeechSynthesis properties linked above
 */
 
 if (synth.onvoiceschanged !== undefined) {
  window.alert("invoked");
  synth.onvoiceschanged = populateVoiceList;
}

function init() {
  var select = document.getElementById('voice-select');
  var button = document.getElementById('but');
  var textArea = document.getElementById('text-to-speak');
  var img = document.querySelector('img');
  var voiceSelect = document.querySelector('select');
  var voices = [];

  //populateVoiceList();
  //EventListener
  //select.addEventListener('change', populateVoiceList);
  setTimeout(()=>{
    voices = synth.getVoices();
    populateVoiceList();
  },50);
  button.addEventListener('click', function(){
    speakNow();
  });
  
  var text="";
  //img.src = 'assets/images/smiling-open.png';
  // TODO
  function populateVoiceList() {
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
    //voiceSelect.selectedIndex = selectedIndex;
  }
  
  textArea.addEventListener('input',function(){
    text = document.getElementById('text-to-speak').value;
  });
  button.onsubmit = function(event) {
    event.preventDefault();
    let utterance = new SpeechSynthesisUtterance("on submit");
  synth.speak(utterance);
    speakNow();
  }
  
  
  function speakNow(){
    //let utterance = new SpeechSynthesisUtterance("speak now");
  //synth.speak(utterance);
    //var text = textArea;
    //window.alert(text);
    console.log(text);
    let utter = new SpeechSynthesisUtterance(text);
   
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(let i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utter.voice = voices[i];
      break;
    }
  }
    synth.speak(utter);
    img.src = 'assets/images/smiling-open.png';
    utter.onend = function(event) {
      console.log('Utterance has finished being spoken after ' + event.elapsedTime + ' seconds.');
      img.src = 'assets/images/smiling.png';
    }

    //textArea.blur();
  }


}