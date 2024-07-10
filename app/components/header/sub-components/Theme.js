"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuthenticating, setDisplayThemesSelection } from "../../state/slices/authSlice";

export default function Theme() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setAuthenticating(true));
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
