// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
}

const selectElement = document.getElementById('horn-select');

selectElement.addEventListener('change', (event) => {
  //console.log(event.target.value);
  document.querySelector('img').src = "../assets/images/" + event.target.value + '.svg';
});