import { sortByNewest, sortByOldest } from './data.js';
//Nos dimos cuenta que data puede ser cualquier palabra ya que funciona "como una variable"
import data from './data/ghibli/ghibli.js';
//Declaramos una variable que recupera los films de la data
const dataGhibli = data.films
const movieContainer = document.getElementById("movieContainer");
const sortOptions = document.getElementById('sortOptions');

//Funcion de menu hamburger

const hamburger = document.querySelector(".hamburger");
console.log("Esta es la variable " + hamburger);
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function displayFilms() {
  dataGhibli.forEach((film) => {
    const createFigure = document.createElement("figure");
    const createImg = document.createElement("img");
    const createP = document.createElement("p");
    const createH3 = document.createElement("h3");

    createFigure.setAttribute("class", "filmContainer");
    createP.innerHTML = film.release_date;
    createH3.innerHTML = film.title;
    createImg.setAttribute("src", film.poster);
    createImg.setAttribute("class", "filmPoster");
    createH3.setAttribute("class", "filmTitle");
    createP.setAttribute("class", "filmYear")

    createFigure.appendChild(createImg);
    createFigure.appendChild(createH3);
    createFigure.appendChild(createP);
    movieContainer.appendChild(createFigure);
  })
}

displayFilms();

//Funcionalidad de botones por orden de reciente a antiguas.
// const btnSortNewest = document.getElementById('sortNewest');
// const btnSortOldest = document.getElementById('sortOldest');

function sortByNewestMovies() {
  const newestOrder = sortByNewest(dataGhibli)
  movieContainer.innerHTML = '';
  return displayFilms(newestOrder);
}
// btnSortNewest.addEventListener('change', sortByNewestMovies);

function sortByOldestMovies() {
  const oldestOrder = sortByOldest(dataGhibli)
  movieContainer.innerHTML = '';
  return displayFilms(oldestOrder);
}

sortOptions.addEventListener('click', function(){
  if (sortOptions.value === 'newest') {
    sortByNewestMovies();
  } else if (sortOptions.value === 'oldest'){
    sortByOldestMovies();
  }
});

