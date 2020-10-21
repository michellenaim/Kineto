export const addToList = (movieId) => {
    return $.ajax({
        url: `/api/users/:user_id/list`,
        method: "POST",
      data: { list: {movie_id: movieId} }
    });
}

export const fetchList = (userId) => {
        return $.ajax({
            url: `/api/users/${userId}/lists`,
            method: "GET",
        });
}


export const deleteListItem = (listId) => {
  return $.ajax({
      url: `api/users/:user_id/lists/${listId}`,
      method: "DELETE",
  });
};