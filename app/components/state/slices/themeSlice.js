// frontend/state/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: 'light', // Default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      return { ...state, theme: action.payload };
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
