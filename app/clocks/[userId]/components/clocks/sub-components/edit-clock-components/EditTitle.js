import React from "react";

export default function EditTitle({ currentClock, oldClock, setCurrentClock, color }) {
  // const currentTheme = useSelector((state) => state.theme.theme);

  const changeHandler = (e) => {
    const { value } = e.target;
    setCurrentClock({ ...currentClock, name: value });
  };

  return (
    <input
      className="flex bg-transparent border-none pt-2 pb-1 w-2/3 outline-none text-2xl"
      style={{ boxShadow: `0px 3px 0 0 ${color}` }}
      placeholder={oldClock.name}
      // style={{ color: themes[currentTheme].textColor }}
      onChange={changeHandler}
      value={currentClock.name}
    />
  );
}
