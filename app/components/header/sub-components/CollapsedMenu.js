import React, { useState } from "react";
import CollapsedMenuIcon from "../icons/CollapsedMenuIcon";
import PhoneMenu from "./PhoneMenu";
import { setLoading } from "../../state/slices/loadingSlice";

export default function CollapsedMenu() {
  let [expanded, setExpanded] = useState(false);
  const clickHandler = () => {
    console.log(expanded);
    setExpanded(!expanded);
    setLoading();
  };

  return (
    <>
      <div onClick={clickHandler}>
        <CollapsedMenuIcon />
      </div>
      {expanded && <PhoneMenu />}
    </>
  );
}
