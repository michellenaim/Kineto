export const fetchSearch = (search) => {
  return $.ajax({
    method: "GET",
    url: "api/movies",
    data:{search}
  });
};