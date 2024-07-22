"use client"

import React from "react";
import App from './App';
import { Provider } from "react-redux";
import { store } from "./components/state/store";
require('dotenv').config();

export default function Index () {

  return <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
};
