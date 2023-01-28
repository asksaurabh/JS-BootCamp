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

const url = "https://swapi.dev/api/planets";
fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log("Fetched all Planets(10 on first page");
    const firstFilmUrl = data.results[0].films[0];
    return fetch(firstFilmUrl);
  })
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    return response.json();
  })
  .then((data) => {
    console.log("Fetched the movie planet is looking for");
    console.log(data.title);
  })
  .catch((err) => {
    console.log("Error..");
  });
