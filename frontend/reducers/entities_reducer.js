import { combineReducers } from "redux";
import moviesReducer from "./movies_reducers";

const entitiesReducer = combineReducers({
    movies: moviesReducer,
});

export default entitiesReducer;