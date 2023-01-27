// Creation of promise object that is randomly resolved or rejected.

const willGetYouADog = new Promise((resolve, reject) => {
  const randomValue = Math.random();
  if (randomValue < 0.5) {
    resolve();
  } else {
    reject();
  }
});
willGetYouADog
  .then(() => {
    console.log("YAY!! Got you a dogo...");
  })
  .catch(() => {
    console.log("NO!! I didn't get a dogo...");
  });
