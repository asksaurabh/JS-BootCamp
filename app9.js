"use strict";

// task - 1
// Select all li's in the first ul and change there text
// const ul = document.querySelector("ul");
// const allLi = ul.querySelectorAll("li");

// // Method - 1
// allLi.forEach((el) => {
//   el.innerText = "Hi";
// });

// // Method - 2
// const liArr = [...allLi];

// for (let el of liArr) {
//   el.innerHTML = "Change it <b>back</b>";
// }

// task - 2
// Apply changes to multiple properties of a li.
const todo = document.querySelector("#todos .todo");
console.log(todo);

// Method 1
// todo.style.textDecoration = "line-through";
// todo.style.color = "gray";
// todo.style.opacity = "50%";

// Method - 2 (Preferred)
// wrap the changes in a new class called .todo-done

// setAttribute() will override every other value.
// todo.setAttribute("class", "todo todo-done");

// ClassList
// todo.classList.add('todo-done');

// Create elements and insert it into DOM
const newImg = document.createElement("img");
newImg.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1573920111312-04f1b25c6b85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1268&q=80"
);
newImg.style.width = "200px";
document.body.appendChild(newImg);

// Create an anchor tag
const newLink = document.createElement("a");
newLink.setAttribute("href", "https://www.youtube.com");
newLink.innerText = "Youtube";

const ul = document.querySelector("ul");
ul.appendChild(newLink);
