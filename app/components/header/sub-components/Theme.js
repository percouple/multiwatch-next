"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../../state/slices/themeSlice";
import moonIcon from "../../../stock-data-assets/moon-icon.svg";
import sunIcon from "../../../stock-data-assets/sun-icon.svg";

export default function Theme() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const toggleTheme = () => {
    dispatch(setTheme());
  };

  return (
    <div
      className={`cursor-pointer w-10 h-10 bg-cover bg-center bg-${moonIcon.src}}`}
      onClick={toggleTheme}
    ></div>
  );
}
