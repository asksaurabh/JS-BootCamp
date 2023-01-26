"use strict";

const btn = document.querySelector("#clicker");

// Bad way of adding an event
// btn.onclick = function () {
//   console.log("You clicked the clicker.");
// };

// Using addEventListener Method.
// Add multiple event listeners to same element.
// btn.addEventListener("click", function () {
//   console.log("You clicked the clicker.");
// });

// btn.addEventListener("mouseover", function () {
//   btn.innerText = "You are hovering over me.";
// });

// btn.addEventListener("mouseout", function () {
//   btn.innerText = "Clicker";
// });

// Add event to multiple elements.
const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet",
];

const container = document.querySelector("#boxes");
const h1 = document.querySelector("h1");

const changeColor = function (event) {
  console.log(event);
  h1.style.color = this.style.backgroundColor;
};

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.appendChild(box);
  box.addEventListener("click", changeColor);
}
