import { filterDirector, sortByNewest, sortByOldest } from './data.js';
//Nos dimos cuenta que data puede ser cualquier palabra ya que funciona "como una variable"
import data from './data/ghibli/ghibli.js';
//Declaramos una variable que recupera los films de la data
const dataGhibli = data.films

const characterContainer = document.getElementById('characterContainer')
const people = dataGhibli.flatMap(movie => movie.people);

function displayCharacters(filmCharacters){
  filmCharacters.forEach((people) => {
    const createFigure = document.createElement("figure");
    const createImg = document.createElement("img");
    const createName = document.createElement("p");
    const createAge = document.createElement("p");
    const createGender = document.createElement("p");

    createFigure.setAttribute("class", "filmContainer");
    createImg.setAttribute("src", people.img);
    createImg.setAttribute("class", "peopleImg");
    createName.innerHTML = people.name;
    createName.setAttribute("class", "characterName");
    createAge.innerHTML = people.age;
    createAge.setAttribute("class", "characterAge");
    createGender.innerHTML = people.gender;
    createGender.setAttribute("class", "characterGender");
    
    createFigure.appendChild(createImg);
    createFigure.appendChild(createName);
    createFigure.appendChild(createAge);
    createFigure.appendChild(createGender);
    characterContainer.appendChild(createFigure);
  })
}

//Función de menú hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const movieContainer = document.getElementById("movieContainer");
const sortOptions = document.getElementById('sortOptions');
const filterOptions = document.getElementById('directorByFilter');

// Función de despliegue de películas
function displayFilms(films) {
  films.forEach((film) => {
    const createFigure = document.createElement("figure");
    const createImg = document.createElement("img");
    const createH3 = document.createElement("h3");
    const createP = document.createElement("p");

    createFigure.setAttribute("class", "filmContainer");
    createImg.setAttribute("src", film.poster);
    createImg.setAttribute("class", "filmPoster");
    createH3.innerHTML = film.title;
    createH3.setAttribute("class", "filmTitle");
    createP.innerHTML = film.release_date;
    createP.setAttribute("class", "filmYear");

    createFigure.appendChild(createImg);
    createFigure.appendChild(createH3);
    createFigure.appendChild(createP);
    movieContainer.appendChild(createFigure);
  })
}

// const btnCharacters = document.getElementsByClassName("btn-characters");
// btnCharacters.addEventListener("click", displayCharacters(people));

// const btnMovies = document.getElementsByClassName("btn-movies");
// btnMovies.addEventListener("click", displayFilms(dataGhibli));

// displayFilms(dataGhibli);
// displayCharacters(people);

function sortByNewestMovies() {
  const newestOrder = sortByNewest(dataGhibli)
  movieContainer.innerHTML = '';
  return displayFilms(newestOrder);
}


function sortByOldestMovies() {
  const oldestOrder = sortByOldest(dataGhibli)
  movieContainer.innerHTML = '';
  return displayFilms(oldestOrder);
}

// Escuchador de evento para la función de ordenado por fecha de lanzamiento
sortOptions.addEventListener('click', function(){
  if (sortOptions.value === 'newest') {
    sortByNewestMovies();
  } else if (sortOptions.value === 'oldest'){
    sortByOldestMovies();
  }
});

// Escuchador de evento para la función de filtrado por director
filterOptions.addEventListener("change", () => {
  const directorSelected = filterOptions.value;
  const directorFiltered = filterDirector(dataGhibli, directorSelected);
  movieContainer.innerHTML = '';
  displayFilms(directorFiltered);
});