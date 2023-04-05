import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRepositories = createAsyncThunk(
  "searchDashboard/fetch",
  async (arg, thunkAPI) => {
    const { query, page = 1, setMaxPage } = arg;

    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&page=${page}&per_page=20`
      );
      setMaxPage(Math.ceil(response.data.total_count / 20));
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
