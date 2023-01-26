"use strict";

const btn = document.querySelector("#clicker");

// Bad way of adding an event
// btn.onclick = function () {
//   console.log("You clicked the clicker.");
// };

// Using addEventListener Method.
btn.addEventListener("click", function () {
  console.log("You clicked the clicker.");
});

btn.addEventListener("mouseover", function () {
  btn.innerText = "You are hovering over me.";
});

btn.addEventListener("mouseout", function () {
  btn.innerText = "Clicker";
});
