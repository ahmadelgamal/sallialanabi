import { combineReducers, createStore } from "redux";
import isLoggedInReducer from "./ducks/isLoggedIn";

const reducer = combineReducers({
  isLoggedIn: isLoggedInReducer
});

const store = createStore(reducer);

export default store;
