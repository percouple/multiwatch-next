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
    creatingUser: false,
    signingIn: false,
    loggedIn: false,
    displayPhoneMenu: false,
    displayThemesSelection: false,
  },
  reducers: {
    setDisplayThemesSelection(state, action) {
      return {...state, displayThemesSelection: action.payload}
    },
    setDisplayPhoneMenu(state, action) {
      return {...state, displayPhoneMenu: action.payload}
    },
    setBackgroundOverlay(state, action) {
      return { ...state, backgroundOverlay: action.payload };
    },
    setSigningIn(state, action) {
      return { ...state, signingIn: action.payload };
    },
    setCreatingUser(state, action) {
      return { ...state, creatingUser: action.payload };
    },
    setCurrentUser(state, action) {
      return { ...state, currentUser: action.payload };
    },
    toggleLoggedIn(state) {
      return {...state, loggedIn: !state.loggedIn}
    }
  },
});

export default authSlice.reducer;

export const {
  setCurrentUser,
  setBackgroundOverlay,
  setCreatingUser,
  setSigningIn,
  toggleLoggedIn,
  setDisplayPhoneMenu,
  setDisplayThemesSelection
} = authSlice.actions; // components will use these functions
