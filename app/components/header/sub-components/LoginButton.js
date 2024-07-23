"use client"

import { redirect, usePathname, useSelectedLayoutSegment } from "next/navigation";
import { useRouter } from "next/navigation";

export default function LoginButton() {

  const router = useRouter();

  const clickHandler = (e) => {
    if (e.target.id === "dropdownButton") {
      e.stopPropagation();
      console.log("yep")
      router.push('/login')
    }
  };

  return (
    <div
      id="dropdownButton"
      onClick={clickHandler}
      className="text-center cursor-pointer border-2 border-solid border-accent-1 rounded-md min-w-[4rem]"
    >
      Login
    </div>
  );
}
