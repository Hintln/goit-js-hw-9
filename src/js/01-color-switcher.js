const startBtm = document.querySelector('[data-start]');
const stopBtm = document.querySelector('[data-stop]');
let timerId = null;




startBtm.addEventListener('click', () => {
    timerId = setInterval(() => {
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000);
    startBtm.disabled = true;
    stopBtm.disabled = false;
});

stopBtm.addEventListener('click', () => {
    clearInterval(timerId);
    startBtm.disabled = false;
    stopBtm.disabled = true;
});


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}