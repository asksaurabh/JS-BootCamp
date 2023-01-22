"use strict";

// Function scope
// Same for var, let, const

let bird = "mandarin duck";

function birdWatch() {
  let bird = "golden pheasant";
  return bird;
}

console.log(birdWatch());
console.log(bird);

// Block scope
// var is not block scoped
var k = 10;
for (var k = 0; k < 3; k++) {
  console.log(k);
}
console.log(k);

// Lexical scope
// Nested functions

function outer() {
  let hero = "Dev";
  function inner() {
    let cryForHelp = `${hero}, save me!`;
    console.log(cryForHelp);
  }
  inner();
}

outer();

// Function expressions

function add(x, y) {
  return x + y;
}

const sum = function (x, y) {
  return x + y;
};

console.log(add);
console.log(sum);
console.log(add(4, 5));
console.log(sum(5, 6));
console.dir(sum);

// Higher order functions
// Func that accept other func as args
// Func that return func.

function callThreeTimes(message) {
  message();
  message();
  message();
}

function laugh() {
  console.log("HAHAHAHA");
}

function cry() {
  console.log("CRRYYYYY");
}

callThreeTimes(laugh);
callThreeTimes(cry);

// Functions are return values
// Also called as factory functions

function multiplyBy(factor) {
  return function (num) {
    console.log(num * factor);
  };
}

const double = multiplyBy(2);
double(5);

const triple = multiplyBy(3);
triple(10);

// Make a factory of functions which helps you compare between min and max ranges for that flavour of function.

function setLimits(min, max) {
  return function (num) {
    return num >= min && num <= max;
  };
}

const isChild = setLimits(0, 11);
const isInNineties = setLimits(1990, 1999);
const isNiceWeather = setLimits(15, 25);

console.log(isChild(5));
console.log(isInNineties(1998));
console.log(isNiceWeather(20));

// Using setTimeout for demonstrating callbacks
// Alerts after 5000ms or 5s

// setTimeout(function () {
//   alert("HI");
// }, 5000);

// Hoisting
console.log(animal); // shows undefined instead of not defined.
var animal = "tapier";
console.log(animal);

// COMBINING VAR with function expression

console.log(func);
// func();  It will not recognise this as a function as it will not get to know what value is stored. It will just recognise the variable.

var func = function () {
  console.log("Hey");
};

func();
