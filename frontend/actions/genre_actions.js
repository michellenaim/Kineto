import * as GenreApiUtils from '../util/genre_util';

export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

const receiveGenres = (genres) => {
    // debugger
    return{
        type: RECEIVE_GENRES,
        genres 
        // payload = movies, genres
    }
}

const receiveGenre = (genre) => ({
    type: RECEIVE_GENRE,
    genre
})

export const fetchGenres = () => dispatch => {
    // debugger
    return GenreApiUtils.fetchGenres()
        .then(genres => dispatch(receiveGenres(genres)));
}

export const fetchGenre = (genreId) => (dispatch) => {
    return GenreApiUtils.fetchGenre(genreId)
        .then(genre => (dispatch(receiveGenre(genre))))
}