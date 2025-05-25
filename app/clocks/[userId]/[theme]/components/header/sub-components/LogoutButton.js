"use client";

import Link from "next/link";

export default function LoginButton({ userId }) {
  // REVOKE COOKIE IN THE FUTURE
  return (
    <Link
      href={`/cold-login`}
      className="text-center cursor-pointer mx-2 py-1 px-4 md:py-2 md:px-6 
      bg-skin-backgroundBase 
      border-4 border-solid border-skin-accent-1 rounded-md min-w-[4rem] 
      transition-all hover:border-skin-accent-2 duration-300 ease-in-out"
    >
      Logout
    </Link>
  );
}
