// Creating a http request

// const myReq = new XMLHttpRequest();

// myReq.addEventListener("load", function () {
//   console.log("Request worked. Successful");
//   // console.dir(myReq);
//   const data = JSON.parse(this.responseText);
//   console.log(data);
// });
// myReq.addEventListener("error", function () {
//   console.log("Error occurred.");
// });

// myReq.open("GET", "https://swapi.dev/api/planets/");
// myReq.send();

// console.log("request sent.");

// Chaining Requests.
// PS: Get all the planets. Choose the first planet and find the first film it appeared in and print the film name.

const planetsRequest = new XMLHttpRequest();

planetsRequest.addEventListener("load", function () {
  const planetsData = JSON.parse(this.responseText);
  const firstPlanetFilmURL = planetsData.results[0].films[0];

  // Get the film name in which firstPlanet first appeared in.
  const filmRequest = new XMLHttpRequest();
  filmRequest.addEventListener("load", function () {
    const filmData = JSON.parse(this.responseText);
    console.log(filmData.title);
  });
  filmRequest.addEventListener("error", function () {
    console.log("FILM NOT Found. Error.");
  });

  filmRequest.open("GET", firstPlanetFilmURL);
  filmRequest.send();
});
planetsRequest.addEventListener("error", function () {
  console.log("OOPS! Error...");
});

planetsRequest.open("GET", "https://swapi.dev/api/planets/");
planetsRequest.send();
