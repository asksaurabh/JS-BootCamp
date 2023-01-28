// Get me planets.

const url = "https://swapi.dev/api/planets";
fetch(url)
  .then((response) => {
    if (!response.ok) throw new Error(`Status Code Error: ${response.status}`);

    response.json().then((data) => {
      console.log(data.results);
    });
  })
  .catch((err) => {
    console.log("Error..");
  });
