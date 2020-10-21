import * as GenreApiUtils from "../util/genre_util";

export const RECEIVE_GENRES = "RECEIVE_GENRES";
export const RECEIVE_GENRE = "RECEIVE_GENRE";

const receiveGenres = (genres) => {
  return {
    type: RECEIVE_GENRES,
    genres,
  };
};

const receiveGenre = (payload) => {
  // debugger
  return {
  type: RECEIVE_GENRE,
  payload,
  }
};

export const fetchGenres = () => (dispatch) => {
  return GenreApiUtils.fetchGenres().then((genres) =>
    dispatch(receiveGenres(genres))
  );
};

export const fetchGenre = (genreId) => (dispatch) => {
  return GenreApiUtils.fetchGenre(genreId).then((genre) =>
    dispatch(receiveGenre(genre))
  );
};
