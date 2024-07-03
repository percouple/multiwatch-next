import React from "react";
import { useDispatch } from "react-redux";
import { clearLoading } from "../../state/slices/loadingSlice";

export default function Loading() {
  const dispatch = useDispatch();

  const clickHandler = (e) => {
    e.stopPropagation();
    dispatch(clearLoading());
  };

  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 flex justify-center items-center"
      onClick={clickHandler}
    >
      {/* Add your loading spinner or message here */}
      <div className="text-white text-2xl">Loading...</div>
    </div>
  );
}
