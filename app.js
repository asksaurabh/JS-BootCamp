console.log("Hello World!", true, 3 + 4);

// if statement
let isUserLoggedIn = true;

if (isUserLoggedIn === true) {
  console.log("Hey user!, you are logged in.");
}

// else if and else
let userRating = 5;

if (userRating < 3) {
  console.log("How can we improve");
} else if (userRating >= 3 && userRating <= 4) {
  console.log("Thank you for rating us.");
} else {
  console.log("You like us so much.");
}

// Use the concept of truthy/falsy values inside conditionals

let currentUserId = null;
// currentUserId = 12;

if (currentUserId) {
  console.log("User is logged in.");
} else {
  console.log("No user is logged in.");
}

// Ternary Operator
let userStatus = "offline";
let color;

console.log(color);
color = userStatus === "offline" ? "red" : "green";
console.log(color);

// Arrays
let shoppingList = ["chips", "almonds", "banana", "watermelon"];
console.log(shoppingList);

let homeCollection = [12, "teddy", NaN, null];
console.log(homeCollection);

const classScores = new Array(12, 13, 14, 15, 16);
console.log(classScores);

// Accessing elements
shoppingList = ["badges", "potatoes", "villas", "football", "socks"];

const size = shoppingList.length;
console.log(
  shoppingList[0],
  shoppingList[size - 1],
  shoppingList[-1],
  shoppingList[size + 8]
);

shoppingList[0] = "new badges";
console.log(shoppingList);

// Add/remove elements from arrays
// Make sure of what they returns
console.log(shoppingList.push("shirts"));
console.log(shoppingList);

console.log(shoppingList.pop());
console.log(shoppingList);

console.log(shoppingList.shift());
console.log(shoppingList);

console.log(shoppingList.unshift("maggi", "broccoli"));
console.log(shoppingList);

// Other built-in methods
const classA = [12, 13, 14];
const classB = [15, 16, 17];

console.log(classA.concat(classB));
console.log(classA);
console.log(classB);

console.log(classA.includes(13));
console.log(classA.includes("13"));

console.log(classA.indexOf(13));
console.log(classA.indexOf(15));

console.log(classA.reverse());
console.log(classA);

console.log(classA.join()); // Default separator is comma.
console.log(classA.join(""));
console.log(classA.join(", "));
console.log(classA.join(" "));

// slice
// Returns a shallow copy.
let animals = ["ant", "bison", "camel", "duck", "elephant"];

console.log(animals.slice(1));
console.log(animals.slice(1, 4));
console.log(animals.slice(-2));

// splice
// splice(start, deleteCount, item1)
animals = ["ant", "bison", "camel", "duck", "elephant"];

// Add item
console.log(animals.splice(1, 0, "mosquito"));
console.log(animals);

// replace item
console.log(animals.splice(0, 1, "Big ant"));
console.log(animals);

// Delete item
console.log(animals.splice(0, 2));
console.log(animals);

// sort()
// sorts acc to UTF-16 code values

const nums = [34, 10, 1000, 123, 45, 6, 99];
console.log(nums.sort());
console.log(nums);

// using comparators for effective sorting

function compareNumbers(a, b) {
  return a - b;
}

console.log(nums.sort(compareNumbers));
console.log(nums);

// Arrays are reference types

const nums1 = [1, 2, 3, 4];
const nums2 = nums1;

nums1.push(5);
console.log(nums1);
console.log(nums2);

// Nested arrays

const board = [
  ["0", null, "X"],
  [null, "X", "0"],
  ["X", "0", null],
];

console.log(board);
