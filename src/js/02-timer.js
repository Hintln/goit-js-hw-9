
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
require('flatpickr/dist/themes/dark.css');
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const startTimerBtn = document.querySelector('button[data-start]');
const daysContent = document.querySelector('span[data-days]');
const hoursContent = document.querySelector('span[data-hours]');
const minutesContent = document.querySelector('span[data-minutes]');
const secondsContent = document.querySelector('span[data-seconds]');

let intervalId = null;
let targetData = null;
let leftTime = 0;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  disableMobile: true,
  minuteIncrement: 1,
    onChange(selectedDates) {
     if (selectedDates[0].getTime() <= Date.now()) {
    return;
  };
    resetContent(daysContent);
    resetContent(hoursContent);
    resetContent(minutesContent);
    resetContent(secondsContent);
    clearInterval(intervalId);
    startTimerBtn.removeEventListener('click', startTimer);
  },
  onClose(selectedDates) {
    if (selectedDates[0].getTime() <= Date.now()) {
      Notify.failure('Please choose a date in the future');
      startTimerBtn.disabled = true;
      return;
      };
    targetData = selectedDates[0];
    startTimerBtn.disabled = false;
    startTimerBtn.addEventListener('click', startTimer);
  },
};


function resetContent(element) {
  element.textContent = '00';
};

flatpickr('#datetime-picker', options);

function startTimer() {
  getLeftTime();
  changeTimerContent();
  intervalId = setInterval(() => {
    getLeftTime();
    if (leftTime >= 0) {
      changeTimerContent();
    }
  }, 1000);
  startTimerBtn.disabled = true;
};

function getLeftTime() {
  leftTime = targetData.getTime() - Date.now();
};


function changeTimerContent() {
  const leftTimeObject = convertMs(leftTime);
  daysContent.textContent = addLeadingZero(leftTimeObject.days);
  hoursContent.textContent = addLeadingZero(leftTimeObject.hours);
  minutesContent.textContent = addLeadingZero(leftTimeObject.minutes);
  secondsContent.textContent = addLeadingZero(leftTimeObject.seconds);
};

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
};





function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};

