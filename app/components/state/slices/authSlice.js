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
    authenticating: false,
    creatingUser: false,
    signingIn: true,
    loggedIn: false,
    displayPhoneMenu: false,
    displayThemesSelection: false,
  },
  reducers: {
    setDisplayThemesSelection(state, action) {
      return {...state, displayThemesSelection: action.payload}
    },
    setDisplayPhoneMenu(state, action) {
      console.log("SETTING DISPLAY PHONE MENU")
      return {...state, displayPhoneMenu: action.payload}
    },
    setAuthenticating(state, action) {
      return { ...state, authenticating: action.payload };
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
  setAuthenticating,
  setCreatingUser,
  setSigningIn,
  toggleLoggedIn,
  setDisplayPhoneMenu,
  setDisplayThemesSelection
} = authSlice.actions; // components will use these functions
