import { combineReducers } from "redux";
import moviesReducer from "./movies_reducers";
import genresReducer from "./genres_reducers";
import moviesGenreReducer from "./movies_genre_reducers"
// import searchReducer from "./search_reducer"

const entitiesReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  moviesgenres: moviesGenreReducer
  // search: searchReducer,
});

export default entitiesReducer;
