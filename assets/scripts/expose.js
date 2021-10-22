// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO 
}

const selectSound = document.querySelector('horn-select');
selectSound.addEventListener('change', changeSound);

function changeSound() {

}

const soundLevel = document.getElementById('volume-controls');
soundLevel.addEventListener('change', changeLevel);

function changeLevel() {

}

const playButtonPressed = document.querySelector('button');
playButtonPressed = addEventListener('click', playSound);

function playSound() {

}