import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { currentWeather } from "../api/weather";

const initialState = {
  weather: {},
  loading: false,
};

export const getCurrentWeather = createAsyncThunk("api/currentWeather", async (city) => {
  try {
    const response = await currentWeather(city);
    return response.data;
  } catch (err) {
    toast.error(err.response.data.message);
  }
});

export const getDate = (dt, timezone) => {
  const utcSeconds = parseInt(dt, 10) + parseInt(timezone, 10);
  const utcMilliseconds = utcSeconds * 1000;
  const localDate = new Date(utcMilliseconds).toUTCString();
  return localDate;
};

const weatherSlice = createSlice({
  name: "weather",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCurrentWeather.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCurrentWeather.fulfilled, (state, action) => {
      state.loading = false;
      state.weather = action.payload || state.weather;
    });
  },
});

export const selectWeather = (state) => state.weather;

export default weatherSlice.reducer;
