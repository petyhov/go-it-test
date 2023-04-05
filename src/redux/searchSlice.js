import { createSlice } from "@reduxjs/toolkit";
import { fetchRepositories } from "./operations";

const searchInitialState = {
  isLoading: false,
  isError: false,
  searchResult: [],
};

const searchSlice = createSlice({
  name: "searchDashboard",
  initialState: searchInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.searchResult = action.payload.items;
    });
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.searchResult = [];
    });
  },
});

export const searchReducer = searchSlice.reducer;
