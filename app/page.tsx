import React from "react";
import App from './App';
require('dotenv').config();

export default function Index () {

  return <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </>
};

