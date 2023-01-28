const URL = "https://swapi.dev/api/planets/";

// axios
//   .get(url)
//   .then((response) => {
//     // Response is already parsed for use. Advantage of Axios.
//     // console.log(response);
//     console.log(response.data.results);
//   })
//   .catch((err) => {
//     console.log("IN CATCH CALLBACK.");
//     console.log(err);
//   });

// Axios chained requests.

const printPlanets = ({ data }) => {
  console.log("Your 10 planets:");
  for (let planet of data.results) {
    console.log(planet.name);
  }

  const nextURL = data.next;
  return Promise.resolve(nextURL);
};

const fetchPlanets = (url = URL) => {
  return axios.get(url);
};

// axios
//   .get(url)
//   .then(printPlanets)
//   .then(printPlanets)
//   .catch((err) => {
//     console.log(err);
//   });

fetchPlanets(URL)
  .then(printPlanets)
  .then(fetchPlanets)
  .then(printPlanets)
  .then(fetchPlanets)
  .then(printPlanets)
  .catch((err) => {
    console.log(err);
  });
