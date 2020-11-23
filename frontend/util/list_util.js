export const addToList = (movieId) => {
    return $.ajax({
      method: "POST",
      url: `/api/users/:user_id/list`,
      data: { list: {movie_id: movieId} }
    });
}

export const fetchList = (userId) => {
    return $.ajax({
      method: "GET",
      url: `/api/users/${userId}/lists`,
    });
}


export const deleteListMovie = (listId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/users/:user_id/lists/${listId}`,
  });
};