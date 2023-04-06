import { filterDirector, sortByNewest, sortByOldest } from './data.js';
//Nos dimos cuenta que data puede ser cualquier palabra ya que funciona "como una variable"
import data from './data/ghibli/ghibli.js';
//Declaramos una variable que recupera los films de la data
const dataGhibli = data.films

const movieContainer = document.getElementById("movieContainer");
const sortOptions = document.getElementById('sortOptions');
const filterOptions = document.getElementById('directorByFilter');

//Función de menú hamburger
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

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

displayFilms(dataGhibli);


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