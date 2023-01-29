// Refactor the moveRight using async - await.

const btn = document.querySelector("#btn");

const moveRight = (element, amount, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const currLeft = element.getBoundingClientRect().left;
      const screenWidth = document.body.clientWidth;
      const currRight = element.getBoundingClientRect().right;

      if (currRight + amount > screenWidth) {
        reject("Can't move to right.");
      } else if (currLeft + amount < 0) {
        reject("Can't move to left.");
      } else {
        element.style.transform = `translateX(${currLeft + amount}px`;
        resolve();
      }
    }, delay);
  });
};

// Using .then()
moveRight(btn, 100, 1000)
  .then(() => moveRight(btn, 100, 1000))
  .then(() => moveRight(btn, 100, 1000))
  .then(() => moveRight(btn, 100, 1000))
  .then(() => moveRight(btn, 1000, 1000))
  .catch((res) => {
    const { currRight, amount, screenWidth } = res;
    console.log(
      `Button's right is currently at ${currRight}. You tried to move to ${
        currRight + amount
      } which is greater than screen width: ${screenWidth}.`
    );
  });

// Using async-await
async function animateMovement(element, amount, delay) {
  await moveRight(element, amount, delay);
  await moveRight(element, amount, delay);
  await moveRight(element, amount, delay);
  await moveRight(element, amount, delay);
  await moveRight(element, amount, delay);
}

animateMovement(btn, 200, 1000).catch((err) => {
  console.log(err);
  animateMovement(btn, -200, 1000).catch((err) => {
    console.log(err);
  });
});
