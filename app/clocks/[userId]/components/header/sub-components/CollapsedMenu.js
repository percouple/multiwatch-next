import React from "react";
import CollapsedMenuIcon from "../../icons/CollapsedMenuIcon";

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
