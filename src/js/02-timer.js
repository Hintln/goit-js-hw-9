import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Report } from 'notiflix/build/notiflix-report-aio';

const startBtm = document.querySelector('[data-start]');
const dayRefs = document.querySelector('[data-days]');
const houerRefs = document.querySelector('[data-hours]');
const minuteRefs = document.querySelector('[data-munites]');
const secondRefs = document.querySelector('[data-seconds]');
let timerId = null;

