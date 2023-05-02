import { combineReducers } from "redux";
import { modeReducer } from "./mode";

const rootReducer = combineReducers({
  mode: modeReducer,
});

export default rootReducer;
