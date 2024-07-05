'use client'

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentUser, toggleLoggedIn } from "../../state/slices/authSlice";
import { setCurrentClocks } from "../../state/slices/clockDataSlice";
import { setClocksMessage } from "../../state/slices/errorMessagesSlice";

export default function LogoutButton() {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const clickHandler = (e) => {
    if (e.target.id === "dropdownButton") {
      e.stopPropagation();
      dispatch(setCurrentUser())
      dispatch(setCurrentClocks([]));
      // TODO: dispatch(updateClocksInDatabase())
      dispatch(setClocksMessage('Successfully logged out'))
      dispatch(toggleLoggedIn());
    }
  };

  // Function to determine theme classes
  const getThemeClasses = () => {
    return currentTheme === 'dark' 
      ? 'border-green-400 bg-gray-800' 
      : 'border-green-500 bg-white';
  };

  return (
    <div 
      id="dropdownButton"
      onClick={clickHandler}
      className={`flex justify-around items-center cursor-pointer text-base py-2 px-4 border-3 rounded-md min-w-[4rem] ${getThemeClasses()}`}
    >
      Logout
    </div>
  );
}