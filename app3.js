"use strict";

// Writing a function declaration
function sayHello() {
  console.log("Hello, again...");
}

for (let i = 0; i < 5; i++) {
  sayHello();
}

// Roll a dice 5 times.
function rollDice() {
  const roll = Math.floor(Math.random() * 6) + 1;
  console.log(`You rolled ${roll}`);
}

for (let i = 0; i < 5; i++) {
  rollDice();
}

// Write a function which accepts arguments
function greetUser(userName) {
  console.log(`Hello, ${userName}`);
}

for (let userName of ["Nikita", "Rachel", "Sheila"]) {
  greetUser(userName);
}

// Add return statements
function getAddition(a, b) {
  return a + b;
}

const sum = getAddition(4, 5);
console.log(sum);

// TASK - 1
// Write a isValidPassword function
// It accepts 2 arguments: password and username
// Password must:
//	- be at least 8 characters
//  - cannot contain spaces
//  - cannot contain the username
// If all requirements are met, return true.
//Otherwise: false

// isValidPassword('89Fjj1nms', 'dogLuvr');  //true
// isValidPassword('dogLuvr123!', 'dogLuvr') //false
// isValidPassword('hello1', 'dogLuvr') //false

function isValidPassword(password, userName) {
  if (
    password.length >= 8 &&
    !password.includes(" ") &&
    !password.includes(userName)
  ) {
    return true;
  }

  return false;
}

console.log(isValidPassword("89Fjj1nms", "dogLuvr"));
console.log(isValidPassword("dogLuvr123!", "dogLuvr"));
console.log(isValidPassword("hello1", "dogLuvr"));

// TASK - 2
// Write a function that returns the avg value in an array of numbers.

function getAverageOfList(nums) {
  let sum = 0;
  for (let val of nums) {
    sum += val;
  }

  return sum / nums.length;
}

console.log(getAverageOfList([0, 50]));
console.log(getAverageOfList([50, 50, 50]));

// TASK - 3
// A pangram is a sentence that contains every letter of the alphabet, like:
//"The quick brown fox jumps over the lazy dog"

// Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet.  Make sure you igore string casing!

// isPangram('The five boxing wizards jump quickly') //true
// isPangram('The five boxing wizards jump quick') //false

function isPangram(sentence) {
  const dictionary = {};
  for (let char of sentence) {
    if (char === " ") continue;

    dictionary[char.toLowerCase()] = true;
  }

  return Object.keys(dictionary).length === 26;
}

console.log(isPangram("The five boxing wizards jump quickly"));
console.log(isPangram("The five boxing wizards jump quick"));
console.log(isPangram("THE FIVE BOXING WIZARDS JUMP QUICKLY"));

// TASK - 4
// Write a getCard() function which returns a random playing card object, like:
// 		{
// 			value: 'K'
// 			suit: 'clubs'
// 		}
//Pick a random value from:
//----1,2,3,4,5,6,7,8,9,10,J,Q,K,A
//Pick a random suit from:
//----clubs,spades, hearts, diamonds
//Return both in an object

function pickRandomElement(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function getCard() {
  const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"];
  const randomValue = pickRandomElement(values);

  const suits = ["clubs", "spades", "hearts", "diamonds"];
  const randomSuit = pickRandomElement(suits);

  return {
    value: randomValue,
    suit: randomSuit,
  };
}

for (let i = 0; i < 5; i++) {
  console.log(getCard());
}
