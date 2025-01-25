"use strict";

const numElement = document.querySelector(".number");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const sound = new Audio("soundpop.mp3");

let num = Number(numElement.textContent);

inc.addEventListener("click", () => {
  num = num + 1;
  numElement.textContent = num;
  sound.play();
});

dec.addEventListener("click", () => {
  num = num - 1;
  numElement.textContent = num;
  sound.play();
});

reset.addEventListener("click", () => {
  num = 0;
  numElement.textContent = 0;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    num = num + 1;
    numElement.textContent = num;
    sound.play();
  } else if (event.key === "ArrowDown") {
    num = num - 1;
    numElement.textContent = num;
    sound.play();
  } else if (event.key === "r") {
    num = 0;
    numElement.textContent = 0;
  }
});
