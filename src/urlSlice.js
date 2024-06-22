import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
  shortUrl: "",
  validate: "",
};
export const urlSlice = createSlice({
  name: "urlSlice",
  initialState: initialState,
  reducers: {
    setShortUrl: (state, { payload }) => {
      state.shortUrl = payload;
    },

    setValidation: (state, { payload }) => {
      state.validate = payload;
    },
  },
});

export const { setShortUrl, setValidation } = urlSlice.actions;

export const selectShortUrl = (state) => state.url.shortUrl;
export const selectValidation = (state) => state.url.validate;

export default urlSlice.reducer;
