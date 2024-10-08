"use client";

import Link from "next/link";

export default function Theme({userId}) {

  return (
    <Link
      href={`/clocks/${userId}/theme`}
      className="text-center cursor-pointer mx-2 py-2 px-6 bg-bkg border-4 border-solid border-accent-1 rounded-md min-w-[4rem] transition-all hover:border-accent-2 duration-300 ease-in-out"
    >
      Themes
    </Link>
  );
}
