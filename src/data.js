
export const sortByNewest = (films) => {
  const sortedData = films.sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
  return sortedData;
};

export const sortByOldest = (films) => {
  const sortedData = films.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
  return sortedData;
};

export const sortByAZ = (films) => {
  const sortedData = films.sort((a,z) => (a.name > z.name ? 1 : -1));
  return sortedData;
};

export const sortByZA = (films) => {
  const sortedData = films.sort ((a,z) => (a.name < z.name ? 1 : -1));
  return sortedData;
};

//Función de filtrado por director
export const filterDirector = (films, selectDirectors) =>{
  return films.filter((film) => film.director.includes(selectDirectors));
};

//Función de personajes filtrados por género
export const filterGender = (characters, selectGender) => {
  return characters.filter((character) => character.gender.includes(selectGender));
};