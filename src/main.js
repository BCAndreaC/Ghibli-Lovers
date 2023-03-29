import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Nos dimos cuenta que data puede ser cualquier palabra ya que funciona "como una variable"
import data from './data/ghibli/ghibli.js';
//Declaramos una variable que recupera los films de la data
const dataGhibli = data.films
//declaramos una variable que funciona como array para recuperar de la data solo los directores. map=iterar informacion y flat=para unir la data dispersa en un solo array y debe de llevar por default 1 => = es una nueva forma de  ECMAScript 2015 para realizar funciones dentro de variables se llama arrow function
const directorArr = dataGhibli.map(a=>a.people).flat(1)
console.log(directorArr);





//intento de acceder a la data de personajes
const dataPeople = data.people

const peopleArr = dataPeople.map(b=>b.age).flat(1)
console.log(peopleArr);

console.log(example, data);
