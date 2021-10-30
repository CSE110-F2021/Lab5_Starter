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
  const imgSrc = document.querySelectorAll("img");

  Updaing_text();
  press_button(imgSrc);
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
  }
}

function press_button(imgSrc) {
  let language = document.getElementById("voice-select");
  var val = "";

  language.addEventListener("change", (event) => {
    val = event.target.value;
  });

  const audio_button = document.querySelector("button");

  audio_button.addEventListener("click", play_speech);
  function play_speech() {
    imgSrc[0].src = "assets/images/smiling-open.png";
    let speech = new SpeechSynthesisUtterance();
    speech.text = document.querySelector("textarea").placeholder;
    speech.lang = val;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
    speech.onend = function (event) {
      imgSrc[0].src = "assets/images/smiling.png";
    };
  }
}
