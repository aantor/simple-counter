const counter = document.querySelector('#counter');
const increase = document.querySelector('#increase');
const decrease = document.querySelector('#decrease');

let count = 0;

increase.addEventListener('click', function (e) {
  counter.textContent = ++count;
});
decrease.addEventListener('click', function (e) {
  counter.textContent = --count;
});
