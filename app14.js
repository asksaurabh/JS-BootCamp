// Creating a http request

const myReq = new XMLHttpRequest();

myReq.addEventListener("load", function () {
  console.log("Request worked. Successful");
  // console.dir(myReq);
  const data = JSON.parse(this.responseText);
  console.log(data);
});
myReq.addEventListener("error", function () {
  console.log("Error occurred.");
});

myReq.open("GET", "https://swapi.dev/api/planets/");
myReq.send();

console.log("request sent.");
