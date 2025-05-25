'use client'

import React from "react";
import CollapsedMenuIcon from "../../icons/CollapsedMenuIcon";
import Link from "next/link";
import { useParams } from "next/navigation";

export default function CollapsedMenu( ) {

  const params = useParams();

  return (
    <Link className="border-4 p-1 rounded-md border-skin-accent-1 transition-colors
     duration-200 hover:border-skin-accent-2"
    href={`/clocks/${params.userId}/${params.theme}/collapse-menu`}>
      <CollapsedMenuIcon />
    </Link>
  );
}
