import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setBackgroundOverlay,
  setDisplayLogin,
} from "../../state/slices/authSlice";

export default function DBUpdateFlag() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const clickHandler = () => {
    if (currentUser.username) {
      console.log(currentUser);
      // Axios backend request
    } else {
      dispatch(setBackgroundOverlay(true));
      dispatch(setDisplayLogin(true));
    }
  };

  return (
    <div
      onClick={clickHandler}
      className="text-center cursor-pointer text-base py-2 px-4 border-3 border-accent-1 rounded-md min-w-[4rem]"
    >
      DB Save
    </div>
  );
}
