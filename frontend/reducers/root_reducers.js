import { combineReducers } from 'redux';
import sessionReducer from './session_reducers'
import errorsReducer from './errors_reducers';

export default combineReducers({
    session: sessionReducer,
    errors: errorsReducer,
});
