// Seting default params

const greetUser = (userName = "Anonymous") => {
  return `Hello, ${userName}`;
};

console.log(greetUser("Saurabh"));
console.log(greetUser());

// Spread in function calls
const nums = [10, 20, 30, 40, 50, 60, 70];

console.log(Math.max(10, 20, 30, 40, 50, 60, 70));
console.log(Math.max(...nums));

function printFiveElements(a, b, c, d, e) {
  console.log("a : " + a);
  console.log("b : " + b);
  console.log("c : " + c);
  console.log("d : " + d);
  console.log("e : " + e);
}

const colors = ["red", "blue", "green", "yellow", "pink"];
printFiveElements(...colors);

const userName = "ANKIT";
printFiveElements(...userName);

// Spread in array literals
const cephalopods = [
  "dumbo octopus",
  "humboldt squid",
  "flamboyant cuttlefish",
];
const gastropods = ["giant african snail", "banana slug", "variable neon slug"];
const cnidaria = ["fire coral", "moon jelly"];

const mollusca = [...cephalopods, ...gastropods, "new found"];
console.log(mollusca);

const newArray = [...cephalopods];
console.log(newArray);

newArray[0] = "Modified";
console.log(newArray);
console.log(cephalopods);

// Get me an array of characters
const alphabets = "abcdefghijklmnopqrstuvwxyz";

console.log(alphabets.split(""));
console.log([...alphabets]);

// Spread in object literals
// You can spread an object literal only inside another object literal.
const person = {
  userName: "Saurabh",
  age: 20,
  isYoung: true,
};

const employee = {
  ...person,
  company: "Apple",
};
console.log(employee);

const random = [..."hello", { ...employee }];
console.log(random);

// Arguments object
function getSum() {
  console.log(arguments, typeof arguments);
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(getSum(1, 2, 3, 4, 5));

// Rest operator
function getAddition(...nums) {
  console.log(nums);
  return nums.reduce((total, currValue) => {
    return total + currValue;
  }, 0);
}

console.log(getAddition(1, 2, 3));
console.log(getAddition(1, 2, 3, 4, 5));

// Also used to collect the remaining arguments.
function greet(firstName, lastName, ...titles) {
  console.log(firstName);
  console.log(lastName);
  console.log(titles);
}

greet("Saurabh", "Kumar", "Mr.", "Glad", "Hi");

// Multiply numbers
const multiply = (...nums) => {
  return nums.reduce((product, num) => product * num);
};

console.log(multiply(1, 2, 3));

// Array destructuring
const raceResults = [
  "Eliud Kipchoge",
  "Feyisa Lelisa",
  "Galen Rupp",
  "Ghirmay Ghebreslassie",
  "Alphonce Simbu",
  "Jared Ward",
];

const [gold, silver, bronze] = raceResults;
console.log(gold, silver, bronze);

const [topper, ...rest] = raceResults; // Using rest operator.
console.log(topper, rest);

const [first, , third] = raceResults;
console.log(first, third);

// Object destructuring
const runner = {
  firstName: "Eliud",
  lastName: "Kipchoge",
  country: "Kenya",
  title: "Elder of the Order of the Golden Heart of Kenya",
};

const { firstName, lastName } = runner;
console.log(firstName, lastName);

const { country: nation } = runner;
console.log(nation);

const { title, ...otherProperties } = runner;
console.log(title, otherProperties);

// Nested destructuring
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya",
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia",
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States",
  },
];

const [goldWinner, silverWinner, bronzeWinner] = results;
console.log(goldWinner, silverWinner, bronzeWinner);

// Get the country of silverWinner and firstName of bronzeWinner
const [, { country: silverWinnerCountry }, { first: bronzeWinnerName }] =
  results;
console.log(silverWinnerCountry, bronzeWinnerName);

// Params destructuring

const greetGoldWinner = ({ first: firstName, last: lastName }) => {
  console.log(`Congratulations ${firstName} ${lastName}`);
};

greetGoldWinner(goldWinner);

// Params destructuring when array is passed.
const parseResponse = ([protocol, statusCode, contentType]) => {
  if (statusCode.includes("200")) {
    console.log("Request successful");
  }
};
const response = ["HTTP/1.1", "200 OK", "application/json"];
parseResponse(response);
