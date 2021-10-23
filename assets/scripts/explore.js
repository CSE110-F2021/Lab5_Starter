// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

    speechSynthesis.addEventListener("voiceschanged", (event) => {
        var voices = speechSynthesis.getVoices();
        let selections = document.getElementById("voice-select");
        for (let i = 0; i < voices.length; i++) {
            let opt = document.createElement("option");
            opt.innerHTML = voices[i].name + " " + "(" + voices[i].lang + ")";
            opt.value = i;
            selections.appendChild(opt);
        }
    });
    let voice = document.querySelector("select");
    let voice_chosen;
    voice.addEventListener("change", (event) => {
        voice_chosen = voice.value;
    })
    
    let default_img = document.querySelector("img");
    default_img.src = ".assets/images/smiling.png"


    let button = document.querySelector("button");
    button.addEventListener("click", (event) => {
        let voices = speechSynthesis.getVoices();
        let lines = document.getElementById("text-to-speak").value;
        let utterance = new SpeechSynthesisUtterance(lines)
        utterance.voice = voices[voice_chosen];
        let img = document.querySelector("img");
        speechSynthesis.speak(utterance);
        img.src = ".assets/images/smiling-open.png";
        utterance.onend = function() { img.src = ".assets/images/smiling.png" };

    });

}
