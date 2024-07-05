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
  },
  reducers: {
    setAuthenticating(state, action) {
      console.log("AUTHENNG");
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
  toggleLoggedIn
} = authSlice.actions; // components will use these functions
