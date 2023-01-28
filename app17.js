// Part - 1
// Normal working with promises where callback inside .then() runs only if first requests gets resolved successfully.

function getData() {
  const data = axios.get("https://swapi.dev/api/planets/").then(({ data }) => {
    console.log(data);
  });
}
getData();
