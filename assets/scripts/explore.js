// explore.js
window.addEventListener("DOMContentLoaded", init);
function init() {
  // TODO
  VoiceList();
  if (
    typeof speechSynthesis !== "undefined" &&
    speechSynthesis.onvoiceschanged !== undefined
  ) {
    speechSynthesis.onvoiceschanged = VoiceList;
  }
  console.log(document.getElementById("voice-select"));
  Updaing_text();
  press_button();
}
function VoiceList() {
  if (typeof speechSynthesis === "undefined") {
    return;
  }
  var voices = speechSynthesis.getVoices();
  for (let i = 0; i < voices.length; i++) {
    var x = document.getElementById("vocie-select");
    let option = document.createElement("option");
    if (voices[i].name.includes("Google")) {
      option.textContent =
        voices[i].name.substr(7) + "(" + voices[i].lang + ")";
    } else {
      option.textContent =
        voices[i].name.substr(9) + "(" + voices[i].lang + ")";
    }
    option.setAttribute("value", voices[i].lang);
    option.setAttribute("value1", voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}
function Updaing_text() {
  let input = document.querySelector("textarea");
  input.addEventListener("input", update_text);
  function update_text(e) {
    document.getElementById("text-to-speak").placeholder = e.target.value;
    console.log(input.placeholder);
  }
}
function press_button() {
  let language = document.getElementById("voice-select");
  var val = "";
  language.addEventListener("change", (event) => {
    val = event.target.value;
  });
  console.log(val);
  const audio_button = document.querySelector("button");
  audio_button.addEventListener("click", play_speech);
  function play_speech() {
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.querySelector("textarea").placeholder;
    speech.lang = val;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    console.log(speech.lang);
    window.speechSynthesis.speak(speech);
  }
}
