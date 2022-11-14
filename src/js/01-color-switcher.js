const startBtm = document.querySelector('[data-start]');
const stopBtm = document.querySelector('[data-stop]');
let timerId = null;


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

