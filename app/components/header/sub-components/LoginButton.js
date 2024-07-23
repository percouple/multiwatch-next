"use client"

import Link from "next/link";

export default function LoginButton() {

  return (
    <Link
      id="dropdownButton"
      href="/login"
      className="text-center cursor-pointer border-2 border-solid border-accent-1 rounded-md min-w-[4rem]"
    >
      Login
    </Link>
  );
}
