import { RECEIVE_MOVIES, RECEIVE_MOVIE } from "../actions/movie_actions";
import { RECEIVE_GENRE } from "../actions/genre_actions"

const moviesReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_MOVIES:
      nextState = action.movies;
      return nextState;
      case RECEIVE_MOVIE:
        nextState[action.movie.id] = action.movie;
        return nextState;
      case RECEIVE_GENRE:
        debugger
        nextState[action.payload.movies] = action.payload.movies;
        return nextState;
    default:
      return state;
  }
};

export default moviesReducer;
