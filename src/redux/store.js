import { configureStore } from "@reduxjs/toolkit";

import searchReducer from "./search/slice";

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
