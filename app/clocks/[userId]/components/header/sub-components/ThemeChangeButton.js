"use client";

import Link from "next/link";

export default function Theme({userId}) {

  return (
    <Link
      href={`/clocks/${userId}/theme`}
      className="text-center cursor-pointer border-2 border-solid border-accent-1 rounded-md min-w-[4rem]"
    >
      Themes
    </Link>
  );
}
