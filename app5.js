"use strict";

// forEach method
const nums = [10, 20, 30, 40, 50, 11, 21, 31, 41];

nums.forEach(function (element) {
  console.log(`Element: ${element}`);
});

nums.forEach(function (num, index) {
  console.log(`Element: ${num}, index: ${index}`);
});

// Print title for each element in the array below:
let books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

books.forEach(function (book) {
  console.log(book.title);
});

const bookTitles = books.map(function (book) {
  return book.title;
});

console.log(bookTitles);

// Map Method
// Creates a new array with the result of calling a callback on each of the elements of the array.

const scores = [10, 20, 30, 40, 50, 11, 21, 31, 41];
const words = ["asap", "byob", "png", "jpeg", "pdfg"];

const halves = scores.map(function (num) {
  return num / 2;
});

console.log(halves);

const evenOdds = scores.map(function (num) {
  return {
    num: num,
    isEven: num % 2 == 0,
  };
});

console.log(evenOdds);

// A.S.A.P, B.Y.O.B, ...
const transformedWords = words.map(function (word) {
  return word.toUpperCase().split("").join(".");
});

console.log(transformedWords);

// Arrow functions
const students = ["ram", "shyam", "gyan"];

const studentRecords = students.map((student) => {
  return {
    firstName: student,
    rollNo: Math.floor(Math.random() * 100) + 1,
  };
});

console.log(studentRecords);

const marksList = [10, 11, 12, 13, 14, 15];
const oddEvens = marksList.map((marks) => {
  return marks % 2 === 0 ? `${marks} : even` : `${marks} : odd`;
});

console.log(oddEvens);

// Find method
const myList = [10, 20, 30, 40, 50];
let target = 35;
target = 55;

let res = myList.find((num) => {
  return num > target;
});

console.log(res);

const names = ["Saurabh", "Rishabh", "Mr. Kumar"];

const res1 = names.find((userName) => {
  return userName.includes("Mr");
});

console.log(res1);

// TASK -> find book with rating === 4.3
books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

const ans = books.find((book) => {
  return book.authors.includes("Neil Gaiman");
});

console.log(ans);

// filter() method
const numbers = [111, 12, 13, 14, 15, 16];
const odds = numbers.filter((num) => {
  return num % 2 === 1;
});

console.log(odds);

books = [
  {
    title: "The Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
  },
  {
    title: "The Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
  },
];

const query = "The";
const getBooksByQuery = books.filter((book) => {
  const bookTitle = book.title.toLowerCase();
  return bookTitle.includes(query.toLowerCase());
});

console.log(getBooksByQuery);

// every
const myGuys = ["ram", "kam", "jam", "dam", "four"];

const isEveryGuyHasLengthThree = myGuys.every((guy) => {
  return guy.length === 3;
});

console.log(isEveryGuyHasLengthThree);

const isAnyGuyHasLengthFour = myGuys.some((guy) => {
  return guy.length === 4;
});

console.log(isAnyGuyHasLengthFour);

// sort() function with its callback
// sort() does sorting in place
// do it on its copy without modifying the original array.

const classA = [89, 10, 1, 1000, 34, 29, 90];
const ascSort = classA.slice().sort((a, b) => a - b);
console.log(ascSort);

const descSort = classA.slice().sort((a, b) => b - a);
console.log(descSort);

console.log(classA);

// sort by ratings
books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

const sortByRatings = books.slice().sort((bookA, bookB) => {
  return bookB.rating - bookA.rating;
});

console.log(sortByRatings);

// Reduce method.
// Reducing to a single value

const classB = [10, 20, 30, 50];
const additionResult = classB.reduce((total, currentValue) => {
  return total * currentValue;
});

console.log(additionResult);

// Find max value in the array with initial Value 100
// Syntax: array.reduce(callback, initialValue);

const maxResult = classB.reduce((maxValue, currentValue) => {
  return Math.max(maxValue, currentValue);
}, 100);

console.log(maxResult);

// More of reduce
const votes = ["y", "y", "n", "y", "n", "y", "n", "y", "n", "n", "n", "y", "y"];

const electionResult = votes.reduce((voteBank, currentVote) => {
  voteBank[currentVote] = (voteBank[currentVote] || 0) + 1;
  return voteBank;
}, {});

console.log(electionResult);

// TASK - 2
books = [
  {
    title: "Good Omens",
    authors: ["Terry Pratchett", "Neil Gaiman"],
    rating: 4.25,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "Changing My Mind",
    authors: ["Zadie Smith"],
    rating: 3.83,
    genres: ["nonfiction", "essays"],
  },
  {
    title: "Bone: The Complete Edition",
    authors: ["Jeff Smith"],
    rating: 4.42,
    genres: ["fiction", "graphic novel", "fantasy"],
  },
  {
    title: "American Gods",
    authors: ["Neil Gaiman"],
    rating: 4.11,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "A Gentleman in Moscow",
    authors: ["Amor Towles"],
    rating: 4.36,
    genres: ["fiction", "historical fiction"],
  },
  {
    title: "The Name of the Wind",
    authors: ["Patrick Rothfuss"],
    rating: 4.54,
    genres: ["fiction", "fantasy"],
  },
  {
    title: "The Overstory",
    authors: ["Richard Powers"],
    rating: 4.19,
    genres: ["fiction", "short stories"],
  },
  {
    title: "A Truly Horrible Book",
    authors: ["Xavier Time"],
    rating: 2.18,
    genres: ["fiction", "garbage"],
  },
  {
    title: "The Way of Kings",
    authors: ["Brandon Sanderson"],
    rating: 4.65,
    genres: ["fantasy", "epic"],
  },
  {
    title: "Lord of the flies",
    authors: ["William Golding"],
    rating: 3.67,
    genres: ["fiction"],
  },
];

const groupedByRatings = books.reduce((group, book) => {
  const rating = Math.floor(book.rating);
  if (!group[rating]) group[rating] = [];
  group[rating].push(book);
  return group;
}, {});

console.log(groupedByRatings);
