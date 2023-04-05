import { createSlice } from "@reduxjs/toolkit";
import { fetchRepositories } from "./operations";

const searchInitialState = {
  isLoading: false,
  isError: false,
  searchValue: "",
  searchResult: [],
  pagesCount: 0,
  currentPage: 1,
};

const searchSlice = createSlice({
  name: "searchDashboard",
  initialState: searchInitialState,
  reducers: {
    setSearchValue(state, action) {
      state.searchValue = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchRepositories.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchRepositories.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.searchResult = action.payload.items;
      state.pagesCount = Math.ceil(action.payload.items.length / 3);
    });
    builder.addCase(fetchRepositories.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.searchResult = [];
      state.pagesCount = 0;
    });
  },
});

export const { setSearchValue, setCurrentPage } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
