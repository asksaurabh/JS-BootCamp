"use strict";
// Object creation, accessing properties

const fitBitData = {
  totalSteps: 12456,
  totalMiles: 241,
  avgCalorieBurn: 7654,
  workoutsThisWeek: "6 of 7",
  avgGoodSleep: "2:13",
  isHeartGood: true,
  location: ["delhi", "hyderabad"],
  45: "forty five",
  "user code": 267,
};

console.log(fitBitData);
console.log(fitBitData.totalSteps);
console.log(fitBitData["45"]);
console.log(fitBitData["user code"]);
console.log(fitBitData["user" + " code"]);

// Add/update properties
const userReviews = {};

userReviews["harbinger"] = 4.5;
userReviews.jonhycash007 = 4.0;
console.log(userReviews);
userReviews["jonhycash007"] += 1;
console.log(userReviews);
console.log(userReviews.harbinger);

// Nested arrays/objects
const studentData = {
  firstName: "Saurabh",
  lastName: "Kumar",
  strengths: ["Music", "Art", "Maths"],
  scores: {
    midterm: 98,
    endterm: 99,
  },
};

console.log(studentData);
const avgScore = (studentData.scores.midterm + studentData.scores.endterm) / 2;
console.log(avgScore);

// Make a shopping cart
const shoppingCart = [
  {
    productName: "Blue sticks",
    price: 855,
    quantity: 2,
  },
  {
    productName: "Gems",
    price: 786,
    quantity: 1,
  },
];

console.log(shoppingCart[0]);
console.log(shoppingCart[0].productName);
console.log(shoppingCart[0]["price"]);

// Make a tic-tac toe game
const game = {
  player1: {
    userName: "harbinger",
    playingAs: "X",
  },
  player2: {
    userName: "loader007",
    playingAs: "O",
  },
  board: [
    ["0", null, "X"],
    ["X", "O", "X"],
    [null, "O", "X"],
  ],
};

console.log(game);

// Reference Types
// Shallow copy

const palette = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
};

const palette2 = palette;
palette2.yellow = "#ffff00";

console.log(palette2);
console.log(palette);

// Array/Object equality

const nums = [1, 2, 3];
const nums2 = [1, 2, 3];

// nums and nums2 store reference to where that array is
// So, all we are doing is comparing the addresses
console.log(nums == nums2, nums === nums2);
console.log([] === [], {} === {});

const copy = nums;
console.log(copy === nums);

// For loops
for (let i = 3; i >= 0; i--) {
  console.log(`Hello : ${i}`);
}

// Nested loops:
let grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    console.log(grid[i][j]);
  }
}

// While loops
const target = Math.floor(Math.random() * 10);
let guess = Math.floor(Math.random() * 10);

while (guess !== target) {
  console.log(`Target: ${target}, Guess: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${target}, Guess: ${guess}`);

// for..of loop

const scoreList = [1, 2, 3, 4, 5];

for (let score of scoreList) {
  console.log(score);
}

for (let char of "hello") {
  console.log(char.toUpperCase());
}

grid = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let sum = 0;

for (let row of grid) {
  for (let num of row) {
    sum += num;
  }
}

console.log(sum);

// Iterate over object keys and values
// Object is not an iterable but there collection of keys and values are

const movieReviews = {
  "mi - 1": 8,
  "mi - 2": 9,
  "mi - 3": 8,
  "mi - 4": 2,
  "mi - 5": 10,
};

for (let movie of Object.keys(movieReviews)) {
  console.log(`MovieName: ${movie} : ${movieReviews[movie]}`);
}

for (let rating of Object.values(movieReviews)) {
  console.log(rating);
}

// for..in loop
// Used to loop over keys in an object

for (let movie in movieReviews) {
  console.log(`MovieName: ${movie} : ${movieReviews[movie]}`);
}

// for..in over other iterables such as arrays.
for (let index in [12, 13, 14, 15]) {
  console.log(index);
}
