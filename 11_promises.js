const btn = document.querySelector("#btn");

// setTimeout(() => {
//   btn.style.transform = `translateX(100px)`;
//   console.log("First setTimeout");

//   setTimeout(() => {
//     btn.style.transform = `translateX(200px)`;
//     console.log("Second setTimeout");

//     setTimeout(() => {
//       btn.style.transform = `translateX(300px)`;
//       console.log("Third setTimeout");

//       setTimeout(() => {
//         btn.style.transform = `translateX(400px)`;
//         console.log("Fourth setTimeout");

//         setTimeout(() => {
//           btn.style.transform = `translateX(500px)`;
//           console.log("Fifth setTimeout");
//         }, 1000);
//       }, 1000);
//     }, 1000);
//   }, 1000);
// }, 1000);

// Refactor - 1
// Idea is to pass a callback - func that can be called later.

// let counter = 1;
// const moveX = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     element.style.transform = `translateX(${amount}px`;
//     console.log(counter++);
//     if (callback) callback();
//   }, delay);
// };

// moveX(btn, 100, 1000, () => {
//   moveX(btn, 200, 1000, () => {
//     moveX(btn, 300, 1000, () => {
//       moveX(btn, 400, 1000, () => {
//         moveX(btn, 500, 1000);
//       });
//     });
//   });
// });

// Refactor - 2
// Remove manually checking in the distance from start.

// const moveRight = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     const currLeft = element.getBoundingClientRect().left;
//     element.style.transform = `translateX(${currLeft + amount}px`;
//     if (callback) callback();
//   }, delay);
// };

// moveRight(btn, 100, 1000, () => {
//   moveRight(btn, 100, 1000, () => {
//     moveRight(btn, 100, 1000, () => {
//       moveRight(btn, 100, 1000, () => {
//         moveRight(btn, 100, 1000);
//       });
//     });
//   });
// });

// Refactor - 3
// Make a program to stop button from going off screen
// const moveRight = (element, amount, delay, callback) => {
//   setTimeout(() => {
//     const currLeft = element.getBoundingClientRect().left;
//     const screenWidth = document.body.clientWidth;
//     const currRight = element.getBoundingClientRect().right;

//     if (currRight + amount > screenWidth) {
//       console.log("DONE MOVING.");
//     } else {
//       element.style.transform = `translateX(${currLeft + amount}px`;
//       if (callback) callback();
//     }
//   }, delay);
// };

// moveRight(btn, 100, 1000, () => {
//   moveRight(btn, 100, 1000, () => {
//     moveRight(btn, 100, 1000, () => {
//       moveRight(btn, 100, 1000, () => {
//         moveRight(btn, 1000, 1000);
//       });
//     });
//   });
// });

// Refactor - 4
// Write this in the form of two callbacks -> Do something on success and do something on callback.
// This is where we encounter problem with nesting callbacks.

const moveRight = (element, amount, delay, onSuccess, onFailure) => {
  setTimeout(() => {
    const currLeft = element.getBoundingClientRect().left;
    const screenWidth = document.body.clientWidth;
    const currRight = element.getBoundingClientRect().right;

    if (currRight + amount > screenWidth) {
      onFailure();
    } else {
      element.style.transform = `translateX(${currLeft + amount}px`;
      if (onSuccess) onSuccess();
    }
  }, delay);
};

moveRight(
  btn,
  100,
  1000,
  () => {
    // On Success - 1
    moveRight(
      btn,
      100,
      1000,
      () => {
        // On Success - 2
        moveRight(
          btn,
          100,
          1000,
          () => {
            // On Success - 3
            moveRight(
              btn,
              1000,
              1000,
              () => {
                // On success - 4
                console.log("WE REALLY HAVE SCREEN LEFT?");
              },
              () => {
                // On Failure - 4
                console.log("Can't move further. DEAD");
              }
            );
          },
          () => {
            // On Failure - 3
            console.log("Can't move further.");
          }
        );
      },
      () => {
        // On Failure - 2
        console.log("Can't move further.");
      }
    );
  },
  () => {
    // On Failure - 1
    console.log("Can't move further.");
  }
);
