import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setAuthenticating,
  setSigningIn,
} from "../../../state/slices/authSlice";

export default function DBUpdateFlag() {
  const dispatch = useDispatch();
  const currentUser = useSelector((state) => state.auth.currentUser);

  const clickHandler = () => {
    if (currentUser.username) {
      console.log(currentUser);
      // Axios backend request
    } else {
      dispatch(setAuthenticating(true));
      dispatch(setSigningIn(true));
    }
  };

  return (
    <div
      onClick={clickHandler}
      className="flex justify-around items-center cursor-pointer text-base py-2 px-4 border-3 rounded-md min-w-[4rem]"
    >
      Save to DB
    </div>
  );
}
