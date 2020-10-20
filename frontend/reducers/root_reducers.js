import { combineReducers } from "redux";
import sessionReducer from "./session_reducers";
import errorsReducer from "./errors_reducers";
import entitiesReducer from "./entities_reducer";

export default combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
});
