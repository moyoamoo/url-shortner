import { configureStore } from "@reduxjs/toolkit";
import urlReducer from "./urlSlice";

export const store = configureStore(
  {
    reducer: {
      url: urlReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
