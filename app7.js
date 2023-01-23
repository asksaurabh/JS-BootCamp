// "use strict";

// Shorthand object properties
// Used to create a property where variable name is keyname and variable value is key value.

const getStats = (stats) => {
  const max = Math.max(...stats);
  const min = Math.min(...stats);
  const sum = stats.reduce((total, stat) => total + stat, 0);
  const avg = sum / stats.length;

  return { max, min, sum, avg };
};

const reviews = [10, 2.8, 4.5, 5.6, 6, 7.8];
const stats = getStats(reviews);
console.log(stats);

// Computed Properties.
// Setting dynamic keys.

const role = "host";
const personName = "Jools Holland";
const role2 = "anchor";
const anchorName = "Nicholas Fury";

// Older way of setting a dynamic key.
const team = {};
team[role] = personName;
console.log(team);

// New way of setting a dynamic key.
const newTeam = {
  [role]: personName,
  [`${role} and ${role2}`]: anchorName,
};
console.log(newTeam);

// Adding methods to objects.

const math = {
  creator: "Saurabh",
  getSum: function (x, y) {
    return x + y;
  },
  getProduct: function (x, y) {
    return x * y;
  },
};

console.log(math.creator, math.getSum(4, 5), math.getProduct(4, 5));

// Shorthand way of adding methods to objects.
// Omitting keynames.

const auth = {
  userName: "Saurabh",
  login() {
    return "Logged you IN";
  },
  logout() {
    return "Logged you OUT";
  },
};

console.log(auth.login(), auth.logout());

// Intro to this keyword
function sayHi() {
  console.log("Hi");

  // COmment out 'use strict' to see the Window object.
  console.log(this);
}

sayHi();

// This keyword inside a method

const person = {
  firstName: "Saurabh",
  lastName: "Kumar",
  fullName() {
    console.log(this);
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(person.fullName());

// Invocation context

const getFullName = person.fullName; // creating a reference to the method
console.log(getFullName()); // undefined undefined

// When to use arrow functions for nested functions.

const annoyer = {
  phrases: [
    "literally",
    "cray cray",
    "I can't even",
    "Totes!",
    "YOLO",
    "Can't Stop, Won't Stop",
  ],
  pickPhrase() {
    const { phrases } = this;
    let index = Math.floor(Math.random() * phrases.length);
    return phrases[index];
  },

  // setInterval will get it's own this which we don't want.
  // start() {
  //   const that = this;
  //   setInterval(function () {
  //     console.log(that);
  //     console.log(that.pickPhrase());
  //   }, 3000);
  // },

  // Alternate way using arrow functions
  start() {
    this.timerId = setInterval(() => {
      console.log(this.pickPhrase());
    }, 3000);
  },

  stop() {
    clearInterval(this.timerId);
    console.log("Phew, it stopped.");
  },
};
