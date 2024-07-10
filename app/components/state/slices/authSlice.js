// frontend/state/slice.js

import { createSlice } from "@reduxjs/toolkit";

const initialUser = {
  username: "",
  password: "",
};

const authSlice = createSlice({
  name: "authentication",
  initialState: {
    currentUser: initialUser,
    backgroundOverlay: false,
    displayCreateUser: false,
    displayLogin: false,
    loggedIn: false,
    displayPhoneMenu: false,
    displayThemesSelection: false,
  },
  reducers: {
    setDisplayThemesSelection(state, action) {
      return { ...state, displayThemesSelection: action.payload };
    },
    setDisplayPhoneMenu(state, action) {
      return { ...state, displayPhoneMenu: action.payload };
    },
    setBackgroundOverlay(state, action) {
      return { ...state, backgroundOverlay: action.payload };
    },
    setDisplayLogin(state, action) {
      return { ...state, displayLogin: action.payload };
    },
    setDisplayCreateUser(state, action) {
      return { ...state, displayCreateUser: action.payload };
    },
    setCurrentUser(state, action) {
      return { ...state, currentUser: action.payload };
    },
    toggleLoggedIn(state) {
      return { ...state, loggedIn: !state.loggedIn };
    },
  },
});

export default authSlice.reducer;

export const {
  setCurrentUser,
  setBackgroundOverlay,
  setDisplayCreateUser,
  setDisplayLogin,
  toggleLoggedIn,
  setDisplayPhoneMenu,
  setDisplayThemesSelection,
} = authSlice.actions; // components will use these functions
