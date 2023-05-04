import { combineReducers } from "redux";
import { modeReducer } from "./mode";
import { weatherReducer } from "./weather";

const rootReducer = combineReducers({
  mode: modeReducer,
  weather: weatherReducer,
});

export default rootReducer;
