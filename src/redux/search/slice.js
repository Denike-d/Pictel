import { createSlice } from "@reduxjs/toolkit";

import { getAllSearchRequest } from "./action";

const initialState = {
  photos: null,
  success: false,
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "photos",
  initialState,
  reducers: {},
  extraReducers: {
    [getAllSearchRequest.pending]: (state) => {
      state.loading = true;
    },
    [getAllSearchRequest.fulfilled]: (state, { payload }) => {
      state.photos = payload.data;
      state.loading = false;
      state.error = null;
      state.success = true;
    },

    [getAllSearchRequest.rejected]: (state, { payload }) => {
      state.loading = false;
      state.error = payload;
      state.success = false;
      state.photos = [];
    },
  },
});

export default slice.reducer;
