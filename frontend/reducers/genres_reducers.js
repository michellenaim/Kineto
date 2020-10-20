import { RECEIVE_GENRES, RECEIVE_GENRE } from "../actions/genre_actions";

const GenresReducer = (state = {}, action) => {
  Object.freeze(state);
  let nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_GENRES:
      nextState = action.genres;
      return nextState;
    case RECEIVE_GENRE:
      nextState[action.genre.id] = action.genre;
      return nextState;
    default:
      return state;
  }
};

export default GenresReducer;
