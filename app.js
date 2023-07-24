"use strict";

const firstNumber = document.querySelector(".first__number");
const secondNumber = document.querySelector(".second__number");
const result = document.querySelector(".result");
const subtraction = document.querySelector(".subtraction");
const addition = document.querySelector(".addition");
const multiplication = document.querySelector(".multiplication");
const division = document.querySelector(".division");
const equal = document.querySelector(".equal");
const conditionSign = document.querySelector(".condition__sign");
const digit1 = document.querySelector(".digit__1");
const digit2 = document.querySelector(".digit__2");
const digit3 = document.querySelector(".digit__3");
const digit4 = document.querySelector(".digit__4");
const digit5 = document.querySelector(".digit__5");
const digit6 = document.querySelector(".digit__6");
const digit7 = document.querySelector(".digit__7");
const digit8 = document.querySelector(".digit__8");
const digit9 = document.querySelector(".digit__9");
const digit0 = document.querySelector(".digit__0");
const digit00 = document.querySelector(".digit__00");
const reset = document.querySelector(".digit__reset");

firstNumber.focus();

let isFirstInput = true;

let changeFocus = function () {
  if (isFirstInput) {
    secondNumber.focus();
    isFirstInput = false;
  }
};

let inputDataAndChangeFocus = function (element) {
  element.addEventListener("click", () => {
    if (isFirstInput) {
      firstNumber.value += element.textContent;
    } else {
      secondNumber.value += element.textContent;
    }
  });
};
inputDataAndChangeFocus(digit1);
inputDataAndChangeFocus(digit2);
inputDataAndChangeFocus(digit3);
inputDataAndChangeFocus(digit4);
inputDataAndChangeFocus(digit5);
inputDataAndChangeFocus(digit6);
inputDataAndChangeFocus(digit7);
inputDataAndChangeFocus(digit8);
inputDataAndChangeFocus(digit9);
inputDataAndChangeFocus(digit0);
inputDataAndChangeFocus(digit00);

let actions = function (el1, el2) {
  el1.addEventListener("click", () => {
    conditionSign.textContent = `${el2}`;
    changeFocus();
  });
};
actions(subtraction, "-");
actions(addition, "+");
actions(multiplication, "*");
actions(division, "/");

equal.addEventListener("click", () => {
  if (conditionSign.textContent === "-") {
    result.value = Number(firstNumber.value) - Number(secondNumber.value);
  } else if (conditionSign.textContent === "+") {
    result.value = Number(firstNumber.value) + Number(secondNumber.value);
  } else if (conditionSign.textContent === "*") {
    result.value = Number(firstNumber.value) * Number(secondNumber.value);
  } else if (conditionSign.textContent === "/") {
    result.value = Number(firstNumber.value) / Number(secondNumber.value);
  }
});

reset.addEventListener("click", () => {
  firstNumber.value = "";
  secondNumber.value = "";
  result.value = "";
  conditionSign.textContent = "";
  firstNumber.focus();
  isFirstInput = true;
});
