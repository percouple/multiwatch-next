import React, {useState} from "react";
import {updateClock} from '../../../../../../http_helpers';
import '../../../../../../globals.css'

export default function Title({ clock, clockColor }) {

  let [titleValue, setTitleValues] = useState(clock.name || "")

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await updateClock(clock.id, {name: titleValue})
  }

  const changeHandler = (e) => {
    const { value } = e.target;
    setTitleValues(value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        className={`flex bg-transparent border-none 
          cursor-default pt-2 pb-1 w-2/3 outline-none text-3xl font-thin 
          clock-title-box-shadow-${clockColor === "skin-accent-1" ? "off" : "on"} 
          hover:cursor-text `}
        placeholder={clock.name}
        onChange={changeHandler}
        onBlur={submitHandler}
        name="title"
        value={titleValue}
      ></input>
    </form>
  );
}
