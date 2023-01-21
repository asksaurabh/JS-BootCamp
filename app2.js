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
