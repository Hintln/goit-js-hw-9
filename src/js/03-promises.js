import { Notify } from 'notiflix/build/notiflix-notify-aio';

const delayInput = document.querySelector("[name='delay']");
const stepInput = document.querySelector("[name='step']");
const amountInput = document.querySelector("[name='amount']");
const createPromiseBtn = document.querySelector("[type='submit]");

createPromiseBtn.addEventListener('click', submitBtnClick);



function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const shouldResolve = Math.random() > 0.3;
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
