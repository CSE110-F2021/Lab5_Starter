// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectElement = document.getElementById('horn-select');
}

const selectElement = document.getElementById('horn-select');

selectElement.addEventListener('change', (event) => {
  document.querySelector('img').src = "../assets/images/" + "air-horn" + '.svg';
  console.log(document.querySelector('img').src);
});