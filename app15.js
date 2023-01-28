// Get me planets.

// const url = "https://swapi.dev/api/planets";
// fetch(url)
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     response.json().then((data) => {
//       console.log(data.results);
//     });
//   })
//   .catch((err) => {
//     console.log("Error..");
//   });

// First films that planets occur in.

// const url = "https://swapi.dev/api/planets";
// fetch(url)
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   })
//   .then((data) => {
//     console.log("Fetched all Planets(10 on first page");
//     const firstFilmUrl = data.results[0].films[0];
//     return fetch(firstFilmUrl);
//   })
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   })
//   .then((data) => {
//     console.log("Fetched the movie planet is looking for");
//     console.log(data.title);
//   })
//   .catch((err) => {
//     console.log("Error..");
//   });

// Refactoring fetch chains
// Clean duplicated logic
// Below is the logic to get first 20 planets.

// const url = "https://swapi.dev/api/planets";
// fetch(url)
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   })
//   .then((data) => {
//     console.log("Fetched all Planets (first 10)");
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//     const nextPageURL = data.next;
//     return fetch(nextPageURL);
//   })
//   .then((response) => {
//     if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

//     return response.json();
//   })
//   .then((data) => {
//     console.log("Fetched next 10 Planets");
//     for (let planet of data.results) {
//       console.log(planet.name);
//     }
//   })
//   .catch((err) => {
//     console.log("Error..");
//   });

// Refactor the above code to get first 20 planets.
const url = "https://swapi.dev/api/planets";

const checkStatusAndParse = (response) => {
  if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

  return response.json();
};

const printPlanets = (data) => {
  console.log("Here are your 10 planets:");
  for (let planet of data.results) {
    console.log(planet.name);
  }
  // In order to chain further return a promise which is resolved.
  return Promise.resolve(data);
};

const fetchMorePlanets = (data) => {
  const nextPageURL = data.next;
  return fetch(nextPageURL);
};

fetch(url)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .then(fetchMorePlanets)
  .then(checkStatusAndParse)
  .then(printPlanets)
  .catch((err) => {
    console.log("Error..");
  });
