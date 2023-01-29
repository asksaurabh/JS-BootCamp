// PokeAPI

// SEQUENTIAL Requests
// Remember request for poke1 is sent and when the response is received then request for poke2 is sent and when response is received for poke2 then request for poke3 is sent.

// async function getPokemons() {
//   const poke1 = await axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const poke2 = await axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const poke3 = await axios.get("https://pokeapi.co/api/v2/pokemon/3");

//   console.log(poke1.data.name);
//   console.log(poke2.data.name);
//   console.log(poke3.data.name);
// }
// getPokemons();

// But the thing is we don't need sequential requests here as we're not using information from this first request to make our second request and so on. So, they are completely independent.

// PARALLEL Requests
// Requests are send in parallel as they are independent of one another.
// async function getPokemonsQuick() {
//   const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
//   const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
//   const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

//   // Store the value after being resolved.
//   poke1 = await prom1;
//   poke2 = await prom2;
//   poke3 = await prom3;

//   console.log("HI", poke1.data.name);
//   console.log("HI", poke2.data.name);
//   console.log("HI", poke3.data.name);
// }
// getPokemonsQuick();

// Q: Create a lightshow using sequential requests

// function changeBodyColor(color, delay) {
//   return new Promise((resolve, request) => {
//     setTimeout(() => {
//       document.body.style.backgroundColor = color;
//       resolve();
//     }, delay);
//   });
// }

// async function lightShow() {
//   await changeBodyColor("teal", 1000);
//   await changeBodyColor("red", 1000);
//   await changeBodyColor("green", 1000);
//   await changeBodyColor("orange", 1000);
//   await changeBodyColor("yellow", 1000);
// }

// lightShow();

// Promise.all()
// Cleaner way to deal with parallel requests.

function printPokemons(results) {
  for (let pokemon of results) {
    console.log(pokemon.data.name);
  }
}

async function getPokemonsQuick() {
  const prom1 = axios.get("https://pokeapi.co/api/v2/pokemon/1");
  const prom2 = axios.get("https://pokeapi.co/api/v2/pokemon/2");
  const prom3 = axios.get("https://pokeapi.co/api/v2/pokemon/3");

  const results = await Promise.all([prom1, prom2, prom3]);
  printPokemons(results);
}
getPokemonsQuick();
getPokemonsQuick();
