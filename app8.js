"use strict";

// Working of Asynchronous callbacks (Web APIs and callback queue)
// Example where execution gets blocked.
console.log("I'm first");
alert("I'm second");
console.log("I'm third");

// Example where execution doesn't get blocked.
// Question is if JS is single threaded then why does JS doesn't wait for 3 secs and logs "I'm last" earlier.

console.log("I'm first");
setTimeout(() => {
  console.log("I'm last");
}, 3000);
console.log("I'm after first.");

// Use this snippet to go through chrome debugging tools
const repeat = (str, times) => {
  let result = "";
  for (let i = 0; i < times; i++) {
    result += str;
  }
  return result;
};

const scream = (str) => {
  return str.toUpperCase() + "!!!";
};

const getRantText = (phrase) => {
  let text = scream(phrase);
  let rant = repeat(text, 8);
  return rant;
};

const makeRant = (phrase, el) => {
  const h1 = document.createElement("h1");
  h1.innerText = getRantText(phrase);
  el.appendChild(h1);
};
console.log("HELLO!");
// makeRant("I hate mayonnaise", document.body);
