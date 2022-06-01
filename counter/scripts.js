// Get digits
let ones = document.querySelector(".ones");
let tens = document.querySelector(".tens");
let hundreds = document.querySelector(".hundreds");

// Get buttons
let inc = document.querySelector(".increment");
let sub = document.querySelector(".subtract");
let reset = document.querySelector(".reset");

// Create variables for the counts for each place
let onesCount = 0;
let tensCount = 0;
let hundredsCount = 0;

// Functions below
inc.addEventListener("click", function () {
  if (onesCount === 9) {
    if (tensCount === 9) {
      if (hundredsCount === 9) {
        alert("Sorry, this counter can't count past 999.")
      } else {
        hundredsCount += 1;
        tensCount = 0;
        onesCount = 0;
        renderDigits();
      }
    } else {
      tensCount += 1;
      onesCount = 0;
      renderDigits();
    }
  } else {
    onesCount += 1;
    renderDigits();
  }
})

sub.addEventListener("click", function () {
  if (onesCount === 0) {
    if (tensCount === 0) {
      if (hundredsCount === 0) {
        alert("Sorry, this counter doesn't know what a negative number is.")
      } else {
        hundredsCount -= 1;
        tensCount = 9;
        onesCount = 9;
        renderDigits();
      }
    } else {
      tensCount -= 1;
      onesCount = 9;
      renderDigits();
    }
  } else {
    onesCount -= 1;
    renderDigits();
  }
})

reset.addEventListener("click", function () {
  onesCount = 0;
  tensCount = 0;
  hundredsCount = 0;
  renderDigits();
})

function renderDigits() {
  ones.innerHTML = onesCount;
  tens.innerHTML = tensCount;
  hundreds.innerHTML = hundredsCount;
}