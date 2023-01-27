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
