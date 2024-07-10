import React, { useState } from "react";
import CollapsedMenuIcon from "../icons/CollapsedMenuIcon";
import { setLoading } from "../../state/slices/loadingSlice";
import { setAuthenticating, setDisplayPhoneMenu, setDisplayThemesSelection } from "../../state/slices/authSlice";
import { useDispatch } from "react-redux";

export default function CollapsedMenu() {

  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(setDisplayPhoneMenu(true));
    dispatch(setAuthenticating(true));
    dispatch(setDisplayThemesSelection(false));
  };

  return (
    <div onClick={clickHandler}>
      <CollapsedMenuIcon />
    </div>
  );
}
