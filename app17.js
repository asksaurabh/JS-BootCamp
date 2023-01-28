// Part - 1
// Normal working with promises where callback inside .then() runs only if first requests gets resolved successfully.

// function getData() {
//   const data = axios.get("https://swapi.dev/api/planets/").then(({ data }) => {
//     console.log(data);
//   });
// }
// getData();

// Part - 2 The Async Keyword
// Helps create synchronous looking asynchronous code.

// Sum function using convetional syntax of promise
function getSum(x, y) {
  return new Promise((resolve, reject) => {
    if (typeof x !== "number" || typeof y !== "number") {
      reject("X and Y must be numbers");
    } else {
      resolve(x + y);
    }
  });
}

getSum(4, 5)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

getSum("Hi", 5)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

// Calculate sum using Async functions.
async function add(x, y) {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "Oyi. X and Y must be numbers";
  }
  return x + y;
}

add("Hi", 5)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });

add(6, 5)
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
