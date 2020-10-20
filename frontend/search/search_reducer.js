import { RECEIVE_MOVIES, CLEAR_SEARCH } from "../actions/movie_actions";

const searchReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_MOVIES:
            nextState = action.movies;
            return nextState;
        case CLEAR_SEARCH:
            return {}
        default:
            return state;
    }
};

export default searchReducer;