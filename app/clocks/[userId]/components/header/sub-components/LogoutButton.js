'use client'

import React from "react";

export default function LogoutButton({ userId }) {

  return (
    <div 
      id="dropdownButton"
      onClick={clickHandler}
      className={`flex justify-around items-center cursor-pointer text-base py-2 px-4 border-3 rounded-md min-w-[4rem]`}
    >
      Logout
    </div>
  );
}