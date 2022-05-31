// Grab all my buttons
const subBtn = document.querySelector(".subtract");
const resetBtn = document.querySelector(".reset");
const incBtn = document.querySelector(".increment");

// Grab count
let countNumber = document.querySelector(".count-cont");

// Define count
let count = 0;

// onClicks
subBtn.addEventListener("click", function () {
  count -= 1;
  countNumber.innerHTML = count;
})
resetBtn.addEventListener("click", function () {
  count = 0;
  countNumber.innerHTML = count;
})
incBtn.addEventListener("click", function () {
  count += 1;
  countNumber.innerHTML = count;
})