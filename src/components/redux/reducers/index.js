import { combineReducers } from "redux";
import { modeReducer } from "./mode";
import { weatherReducer } from "./weather";
import { repositoriesReducer } from "./repositories";

const rootReducer = combineReducers({
  mode: modeReducer,
  weather: weatherReducer,
  repositories: repositoriesReducer,
});

export default rootReducer;
