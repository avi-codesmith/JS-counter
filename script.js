"use strict";

const numElement = document.querySelector(".number");
const inc = document.querySelector(".inc");
const dec = document.querySelector(".dec");
const reset = document.querySelector(".reset");
const sound = new Audio("soundpop.mp3");
const body = document.querySelector("body");

const makeTooltip = (element, text) => {
  const tooltip = document.createElement("span");
  tooltip.textContent = text;
  tooltip.style.backgroundColor = "#444";
  tooltip.style.color = "#fff";
  tooltip.style.fontSize = "14px";
  tooltip.style.padding = "4px 6px";
  tooltip.style.position = "absolute";
  tooltip.style.borderRadius = "4px";
  tooltip.style.whiteSpace = "nowrap";
  tooltip.style.visibility = "hidden";

  body.appendChild(tooltip);

  element.addEventListener("mouseenter", () => {
    const rect = element.getBoundingClientRect();
    tooltip.style.top = `${rect.top + 14}px`;
    tooltip.style.left = `${
      rect.left + rect.width / 0.6 - tooltip.offsetWidth / 0.6
    }px`;
    tooltip.style.visibility = "visible";
  });

  element.addEventListener("mouseleave", () => {
    tooltip.style.visibility = "hidden";
  });
};

makeTooltip(reset, `"R" to reset counter`);
makeTooltip(inc, `"↑" to increase`);
makeTooltip(dec, `"↓" to decrease`);

let num = Number(numElement.textContent);

inc.addEventListener("click", () => {
  num += 1;
  numElement.textContent = num;
  sound.play();
});

dec.addEventListener("click", () => {
  num -= 1;
  numElement.textContent = num;
  sound.play();
});

reset.addEventListener("click", () => {
  num = 0;
  numElement.textContent = 0;
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowUp") {
    num += 1;
    numElement.textContent = num;
    sound.play();
  } else if (event.key === "ArrowDown") {
    num -= 1;
    numElement.textContent = num;
    sound.play();
  } else if (event.key.toLowerCase() === "r") {
    num = 0;
    numElement.textContent = 0;
  }
});
