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
