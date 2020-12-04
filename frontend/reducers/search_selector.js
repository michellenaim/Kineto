export const filterForSearch = (state ,name)=>{
    const moviesArr = [];
    let movies = Object.values(state.entities.movies);
    for (let i = 0; i < movies.length; i++) {
        if(movies[i].title.toLowerCase().includes(name.toLowerCase()))
        {            
            moviesArr.push(movies[i]);
        }
    }

    return moviesArr;
}