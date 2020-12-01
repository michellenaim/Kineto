export const addToList = (list) => {
    return $.ajax({
      method: "POST",
      url: `/api/lists`,
      data: { list }
    });
}

export const fetchLists = () => {
    return $.ajax({
      method: "GET",
      url: `/api/lists`,
    });
}


export const deleteListMovie = (listId) => {
  return $.ajax({
    method: "DELETE",
    url: `api/lists/${listId}`
  });
};