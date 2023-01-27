// Creation of promise object that is randomly resolved or rejected.

// const willGetYouADog = new Promise((resolve, reject) => {
//   const randomValue = Math.random();
//   if (randomValue < 0.5) {
//     resolve();
//   } else {
//     reject();
//   }
// });
// willGetYouADog
//   .then(() => {
//     console.log("YAY!! Got you a dogo...");
//   })
//   .catch(() => {
//     console.log("NO!! I didn't get a dogo...");
//   });

// Returning promises from functions
// Make this promise to take 5 secs to get resolved or rejected.

// const makeDogPromise = () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const randomValue = Math.random();
//       if (randomValue < 0.5) {
//         resolve();
//       } else {
//         reject();
//       }
//     }, 5000);
//   });
// };
// makeDogPromise()
//   .then(() => {
//     console.log("YAY!! Got you a dogo...");
//   })
//   .catch(() => {
//     console.log("NO!! I didn't get a dogo...");
//   });

// Resolving / Rejecting with values
// Try to pretend an http request.

// const fakeRequest = (url) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const pages = {
//         "/users": [
//           { id: 1, userName: "Saurabh" },
//           { id: 2, userName: "Rishabh" },
//         ],
//         "/about": "This is the about page",
//       };
//       const data = pages[url];

//       if (data) {
//         resolve({ status: 200, data });
//       } else {
//         reject({ status: 404 });
//       }
//     }, 1000);
//   });
// };

// // Get all the users.
// fakeRequest("/users")
//   .then((res) => {
//     const users = res.data;
//     console.log(res.status);
//     console.log(users);
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log("Request rejected to get users.");
//   });

// // Get the about page.
// fakeRequest("/about")
//   .then((res) => {
//     console.log(res.status);
//     console.log(res.data);
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log("Request for about page rejected.");
//   });

// // Get the "/contact page"
// fakeRequest("/contact")
//   .then((res) => {
//     console.log(res.status);
//     console.log(res.data);
//   })
//   .catch((res) => {
//     console.log(res.status);
//     console.log("Request for contact page rejected.");
//   });

// Promise chaining
//This is a fake http request function. It takes 1 second to resolve or reject the promise, depending on the url that is passed in

const fakeRequest = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const pages = {
        "/users": [
          { id: 1, username: "Bilbo" },
          { id: 5, username: "Esmerelda" },
        ],
        "/users/1": {
          id: 1,
          username: "Bilbo",
          upvotes: 360,
          city: "Lisbon",
          topPostId: 454321,
        },
        "/users/5": {
          id: 5,
          username: "Esmerelda",
          upvotes: 571,
          city: "Honolulu",
        },
        "/posts/454321": {
          id: 454321,
          title: "Ladies & Gentlemen, may I introduce my pet pig, Hamlet",
        },
        "/about": "This is the about page!",
      };
      const data = pages[url];
      if (data) {
        resolve({ status: 200, data }); //resolve with a value!
      } else {
        reject({ status: 404 }); //reject with a value!
      }
    }, 1000);
  });
};

// Request for /users and when you get /users, go to /users/1 and when you get /users/1 request for the post of /users/1.
// Idea is to return a promise on such type of nested calls.

fakeRequest("/users")
  .then((res) => {
    const userId = res.data[0].id;
    return fakeRequest(`/users/${userId}`);
  })
  .then((res) => {
    const postId = res.data.topPostId;
    return fakeRequest(`/posts/${postId}`);
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log("NO Error..", err);
  });
