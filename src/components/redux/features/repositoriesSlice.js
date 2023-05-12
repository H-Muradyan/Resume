import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { userRepasitories } from "../api/repositories";

const initialState = {
  user: [],
  loading: false,
};

export const getUserRepositories = createAsyncThunk("api/userRepasitories", async (user) => {
  try {
    const response = await userRepasitories(user);
    return response.data;
  } catch (err) {
    toast.error(err.response.data.message);
  }
});

const repositoriesSlice = createSlice({
  name: "repositories",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUserRepositories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getUserRepositories.fulfilled, (state, action) => {
      state.loading = false;
      state.user = action.payload || state.user;
    });
  },
});

export const selectUser = (state) => state.repositories;

export default repositoriesSlice.reducer;
