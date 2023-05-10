import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./features/modeSlice";
import repositoriesReducer from "./features/repositoriesSlice";
import weatherReducer from "./features/weatherSlice";

export const store = configureStore({
  reducer: {
    mode: modeReducer,
    repositories: repositoriesReducer,
    weather: weatherReducer,
  },
});
