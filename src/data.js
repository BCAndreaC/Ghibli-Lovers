
export const sortByNewest = (films) => {
  const sortedData = films.sort((a, b) => (a.release_date < b.release_date ? 1 : -1));
  return sortedData;
}

export const sortByOldest = (films) => {
  const sortedData = films.sort((a, b) => (a.release_date > b.release_date ? 1 : -1));
  return sortedData;
}
// estas funciones son de ejemplo
// export const sortByNewest = (director) => {
//   return director;
// };

// export const sortByOldest= (dataGhibli) {
//   return dataGhibli;
// }