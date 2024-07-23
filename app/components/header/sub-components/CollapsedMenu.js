import React from "react";
import CollapsedMenuIcon from "../../icons/CollapsedMenuIcon";
import {
  setBackgroundOverlay,
  setDisplayPhoneMenu,
  setDisplayThemesSelection,
} from "../../state/slices/authSlice";

export default function CollapsedMenu( {theme} ) {

  const clickHandler = () => {
    console.log("CLICKING");
  };

  return (
    <div className="border-4 p-1 rounded-md border-accent-1">
      <CollapsedMenuIcon />
    </div>
  );
}
