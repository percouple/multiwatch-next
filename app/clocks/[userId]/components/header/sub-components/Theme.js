"use client";

import React from "react";

export default function Theme() {

  const clickHandler = () => {
  };

  return (
    <div
      className="flex justify-around items-center cursor-pointer text-base mx-2 border-2 border-solid border-accent-1 rounded-md min-w-[4rem]"
      onClick={clickHandler}
    >
      Themes
    </div>
  );
}
