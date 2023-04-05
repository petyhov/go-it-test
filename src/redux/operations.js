import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchRepositories = createAsyncThunk(
  "searchDashboard/fetch",
  async (arg, thunkAPI) => {
    const { query } = arg;
    try {
      const response = await axios.get(
        `https://api.github.com/search/repositories?q=${query}&per_page=20`
      );
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);
