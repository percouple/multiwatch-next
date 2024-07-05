// frontend/state/store.js
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import themeReducer from "./slices/themeSlice";
import errorMessagesReducer from './slices/errorMessagesSlice';
import loadingSlice from "./slices/loadingSlice";
import clocksReducer from './slices/clockDataSlice';

export const store = configureStore({
  reducer: {
    // Global reducers
    // other reducers would go here
    auth: authReducer,
    theme: themeReducer,
    errorMessages: errorMessagesReducer,
    loading: loadingSlice,
    clocks: clocksReducer
  },
});
