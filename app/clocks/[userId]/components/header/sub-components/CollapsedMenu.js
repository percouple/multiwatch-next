import React from "react";
import CollapsedMenuIcon from "../../icons/CollapsedMenuIcon";
import Link from "next/link";

export default function CollapsedMenu( {userId} ) {

  return (
    <Link className="border-4 p-1 rounded-md border-skin-accent-2"
    href={`/clocks/${userId}/collapse-menu`}>
      <CollapsedMenuIcon />
    </Link>
  );
}
