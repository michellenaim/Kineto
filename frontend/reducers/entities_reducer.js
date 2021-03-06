import { combineReducers } from "redux";
import moviesReducer from "./movies_reducers";
import genresReducer from "./genres_reducers";
import moviesGenreReducer from "./movies_genre_reducers"
import listsReducer from "./lists_reducers"
import searchReducer from "./search_reducer"

const entitiesReducer = combineReducers({
  movies: moviesReducer,
  genres: genresReducer,
  moviesgenres: moviesGenreReducer,
  lists: listsReducer,
  search: searchReducer,
});

export default entitiesReducer;
