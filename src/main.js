import { example } from './data.js';
// import data from './data/lol/lol.js';
// import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//Nos dimos cuenta que data puede ser cualquier palabra ya que funciona "como una variable"
import data from './data/ghibli/ghibli.js';
//Declaramos una variable que recupera los films de la data
const dataGhibli = data.films
//declaramos una variable que funciona como array para recuperar de la data solo los directores. map=iterar informacion y flat=para unir la data dispersa en un solo array y debe de llevar por default 1 => = es una nueva forma de  ECMAScript 2015 para realizar funciones dentro de variables se llama arrow function
// const directorArr = dataGhibli.map(a=>a.people).flat(1)
// console.log(directorArr);
 const poster20 = dataGhibli.map(b=>b.poster).flat(1)
 console.log(poster20);

 let imagenes = document.getElementById('root');
//  if(imagenes){
//     for (let i=0; i<poster20.length;i++){
//         let crearDiv = document.createElement('div');
//         let crearImg = document.createElement('img');

//         //Investigar setAttribute
//         crearDiv.setAttribute('class','aguacate');
//         crearImg.innerHTML = poster20[i];
//         crearImg.setAttribute('src', poster20[i])
//         imagenes.appendChild(crearImg);
//         imagenes.appendChild(crearDiv);
//     }
//  }


poster20.forEach((aguacate) => {
    if (imagenes) {
    let createDiv = document.createElement("div");
    let createImg = document.createElement("img");

    createDiv.setAttribute("class", "posterContainer");
    createImg.innerHTML = aguacate;
    createImg.setAttribute("src", aguacate);
    createImg.setAttribute("class", "aguacate");

    imagenes.appendChild(createDiv);
    imagenes.appendChild(createImg);
    }
})

 
 var iterator = poster20.values();
 console.log(iterator.next().value);
 console.log(iterator.next().value);








//  const btnPrueba = document.getElementById("btnPrueba");

//  function show_image(src) {
//     var img = document.createElement("img");
//     img.src = iterator;

//     document.body.appendChild(poster1)
//  }

//  btnPrueba.addEventListener("click", show_image())

//  function showImage(){
//     document.write("img src="poster1);
//  }
 
//  const posterImage = document.getElementById("imageTest");

// posterImage.addEventListener("load", () =>
//  posterImage.innerHTML = poster1);




//intento de acceder a la data de personajes
// const dataPeople = data.people

// const peopleArr = dataPeople.map(b=>b.age).flat(1)
// console.log(peopleArr);

// console.log(example, data);
