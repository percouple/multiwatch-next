// frontend/state/themeSlice.js
import { createSlice } from "@reduxjs/toolkit";
import { getUserThemePreference } from '../../../util/stateUtils';

const initialState = {
  theme: 'light', // Default theme
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    setTheme(state, action) {
      let themeChange = state.theme === "light" ? "dark" : "light";
      console.log(themeChange);
      return { ...state, theme: themeChange };
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
