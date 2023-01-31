import { createAsyncThunk } from "@reduxjs/toolkit";

import axios from "axios";

export const getAllSearchRequest = createAsyncThunk(
  async ({ query, page }, { rejectWithValue, dispatch }) => {
    try {
      const config = {
        headers: {
          Authorization: `bTjqqYDVSXiPfzwl6iUIOXYm86ku73rm7moaJLPkUrUfPOgJLpMpCHzC`,
        },
      };
      let url = `https://api.pexels.com/v1/search?query=${query}&per_page=10`;
      const { data: data } = await axios.get(url, config);
      return data;
    } catch (err) {
      // return custom error message from API if any
      return rejectWithValue(
        err.response && err.response.data.message
          ? err.response.data.message
          : err.message
      );
    }
  }
);
