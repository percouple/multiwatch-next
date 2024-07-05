"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../state/slices/themeSlice";

export default function Theme() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const toggleTheme = () => {
    dispatch(setTheme());
  };

  return (
    <div
      className="flex justify-around items-center cursor-pointer text-base mx-2 border-2 border-solid border-accent-1 rounded-md min-w-[4rem]"
      onClick={toggleTheme}
    >
      Theme
    </div>
  );
}
