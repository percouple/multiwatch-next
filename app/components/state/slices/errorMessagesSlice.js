// frontend/state/errorMessagesSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    clocksMessage: "",
    cardMessage: "",
};

const errorMessageSlice = createSlice({
  name: "errorMessages",
  initialState,
  reducers: {
    setClocksMessage(state, action) {
      return { ...state, clocksMessage: action.payload };
    },
    setCardMessage(state, action) {
      return {...state, cardMessage: action.payload};
    },
  },
});

export const { setClocksMessage, setCardMessage } = errorMessageSlice.actions;
export default errorMessageSlice.reducer;