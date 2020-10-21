export const fetchGenres = () => {
  return $.ajax({
    url: "api/genres",
    method: "GET",
  });
};

export const fetchGenre = (genreId) => {
  return $.ajax({
    url: `api/genres/${genreId}`,
    method: "GET",
  });
};
