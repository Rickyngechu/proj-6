"use strict";
const form = document.querySelector(".form");
let billInput = document.querySelector(".bill-inp");
let peopleInput = document.querySelector(".input-people");
const customBtn = document.querySelector(".btn-custom");
const btns = document.querySelectorAll(".btn");

const tipAmt = document.querySelector(".tip-amt__val");
const totalAmt = document.querySelector(".tot-outp__val");

const btnReset = document.querySelector(".btn-reset");

/*Toggle the button classes     and obtain the value of the button which has been clicked*/
let btnV = "";
function getTip() {
  btns.forEach((btn) =>
    btn.addEventListener("click", function () {
      //selecting the target element
      this.classList.toggle("btn-selected");

      //Setting the outer variable to have the button clicked value.
      btnV = this.value;
    })
  );
}
getTip();

/*LETS HANDLE THE FORM FUNCTIONALITY*/
form.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const bill = +billInput.value;
    const people = +peopleInput.value;
    let tip = 0;

    //Here we are checking for the tips input values.
    if (btnV !== "") {
      if (btnV === "5%") {
        tip = 5;
      }
      if (btnV === "10%") {
        tip = 10;
      }
      if (btnV === "15%") {
        tip = 15;
      }
      if (btnV === "25%") {
        tip = 25;
      }
      if (btnV === "50%") {
        tip = 50;
      }
    } else {
      tip = +customBtn.value;
    }

    const tipAmount = ((bill * tip) / 100).toFixed(2);

    const totalAmount = (tipAmount * people).toFixed(2);

    tipAmt.innerHTML = tipAmount;
    totalAmt.innerHTML = totalAmount;
  }
});

//THE BUTTON TO RESET OUR CALCULATOR
btnReset.addEventListener("click", function () {
  tipAmt.innerHTML = totalAmt.innerHTML = "0.00";

  btns.forEach((btn) => btn.classList.remove("btn-selected"));

  billInput.value = peopleInput.value = "";
});
