const url = "https://swapi.dev/api/planets/";

axios
  .get(url)
  .then((response) => {
    // Response is already parsed for use. Advantage of Axios.
    // console.log(response);
    console.log(response.data.results);
  })
  .catch((err) => {
    console.log("IN CATCH CALLBACK.");
    console.log(err);
  });
