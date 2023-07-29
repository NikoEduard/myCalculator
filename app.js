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
const reset = document.querySelector(".digit__reset");
const digitAll = document.querySelectorAll(".digit");

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
for(let i = 0; i < digitAll.length;i++){
  inputDataAndChangeFocus(digitAll[i]);
}

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
