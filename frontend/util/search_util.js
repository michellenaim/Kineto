export const searchByName = (name) =>{
    return $.ajax({
        url: `api/movies/?q=${name.toLowerCase()}`
    })
}

export const editSearchRoute = (query)=>{
  return `/search/${query}`;
}