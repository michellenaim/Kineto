import { combineReducers } from "redux";
import moviesReducer from "./movies_reducers";
import genresReducer from "./genres_reducers";
// import searchReducer from "./search_reducer"

const entitiesReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  // search: searchReducer,
});

export default entitiesReducer;
