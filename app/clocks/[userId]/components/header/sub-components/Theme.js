"use client";

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBackgroundOverlay,
  setDisplayThemesSelection,
} from "../../state/slices/authSlice";

export default function Theme() {

  const clickHandler = () => {
    dispatch(setBackgroundOverlay(true));
    dispatch(setDisplayThemesSelection(true));
  };

  return (
    <div
      className="flex justify-around items-center cursor-pointer text-base mx-2 border-2 border-solid border-accent-1 rounded-md min-w-[4rem]"
      onClick={clickHandler}
    >
      Themes
    </div>
  );
}
