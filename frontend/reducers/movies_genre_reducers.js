import { RECEIVE_ALL_MOVIES_GENRES} from "../actions/movie_actions";

const moviesGenreReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);

    switch (action.type) {
        case RECEIVE_ALL_MOVIES_GENRES:
            // debugger
            nextState = action.moviesgenres;
            return nextState;
        default:
            return state;
    }
};

export default moviesGenreReducer;
