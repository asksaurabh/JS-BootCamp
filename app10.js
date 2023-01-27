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
// const colors = [
//   "red",
//   "orange",
//   "yellow",
//   "green",
//   "blue",
//   "purple",
//   "indigo",
//   "violet",
// ];

// const container = document.querySelector("#boxes");
// const h1 = document.querySelector("h1");

// const changeColor = function (event) {
//   console.log(event);
//   h1.style.color = this.style.backgroundColor;
// };

// for (let color of colors) {
//   const box = document.createElement("div");
//   box.style.backgroundColor = color;
//   box.classList.add("box");
//   container.appendChild(box);
//   box.addEventListener("click", changeColor);
// }

// Key event: keypress, keyup and keydown

// const input = document.querySelector("#username");

// input.addEventListener("keydown", function (event) {
//   console.log("Key down");
// });

// input.addEventListener("keyup", function (event) {
//   console.log("Key up");
// });

// input.addEventListener("keypress", function (event) {
//   console.log("Key Press");
// });

// Shopping List
// const addItemInput = document.querySelector("#addItem");
// const ul = document.querySelector("#items");

// const addItemToItemsList = function () {
//   const listItem = document.createElement("li");
//   listItem.innerText = this.value;
//   ul.appendChild(listItem);
//   this.value = "";
// };

// addItemInput.addEventListener("keydown", function (event) {
//   // console.log(event.key);
//   if (event.key === "Enter" && this.value) {
//     addItemToItemsList.call(this);
//   }
// });

// Form events
const form = document.querySelector("#signup-form");
const creditCard = document.querySelector("#cc");
const termsCheckbox = document.querySelector("#terms");
const veggieSelect = document.querySelector("#veggie");

// submit event and preventDefault
// form.addEventListener("submit", function (event) {
//   event.preventDefault();
//   console.log("cc", creditCard.value);
//   console.log("terms", termsCheckbox.checked);
//   console.log("veggieSelect", veggieSelect.value);
// });

// input and change events
const formData = {};

// Method - 1
// Bad thing about this method is we are hardcoding data into the form.

// creditCard.addEventListener("input", function (event) {
//   formData["cc"] = event.target.value;
// });

// veggieSelect.addEventListener("input", function (event) {
//   formData["veggie"] = event.target.value;
// });

// termsCheckbox.addEventListener("input", function (event) {
//   formData["agreeToTerms"] = event.target.checked;
// });

// Method - 2
// Add a name attribute to each input..

const inputs = [creditCard, termsCheckbox, veggieSelect];

// Since we need only target from event. Destructure it.
// Destructure target to what values you want.

for (let input of inputs) {
  input.addEventListener("input", ({ target }) => {
    const { name, type, value, checked } = target;
    formData[name] = type === "checkbox" ? checked : value;
    console.log(formData);
  });
}
