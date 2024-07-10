import React, { useState } from "react";
import CollapsedMenuIcon from "../../icons/CollapsedMenuIcon";
import {
  setBackgroundOverlay,
  setDisplayPhoneMenu,
  setDisplayThemesSelection,
} from "../../state/slices/authSlice";
import { useDispatch } from "react-redux";

export default function CollapsedMenu() {
  const dispatch = useDispatch();

  const clickHandler = () => {
    console.log("CLICKING");
    dispatch(setDisplayPhoneMenu(true));
    dispatch(setBackgroundOverlay(true));
    dispatch(setDisplayThemesSelection(false));
  };

  return (
    <div onClick={clickHandler} className="border-4 p-1 rounded-md border-accent-1">
      <CollapsedMenuIcon />
    </div>
  );
}
