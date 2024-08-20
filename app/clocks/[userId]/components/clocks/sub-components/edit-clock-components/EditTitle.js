import React from "react";

export default function EditTitle({
  currentClock,
  oldClock,
  setCurrentClock,
  color,
}) {

  // Changes client clock in state
  const changeHandler = (e) => {
    const { value } = e.target;
    setCurrentClock({ ...currentClock, name: value });
  };

  return (
    <input
      className="flex bg-transparent border-none 
    cursor-default pt-2 pb-1 w-2/3 outline-none text-3xl 
    font-thin"
      style={{ boxShadow: `0px 3px 0 0 ${color}` }}
      placeholder={oldClock.name}
      onChange={changeHandler}
      value={currentClock.name}
    />
  );
}
