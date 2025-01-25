import React, {useState} from "react";
import {updateClock} from '../../../../../../http_helpers'

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
        className="flex bg-transparent border-none 
        cursor-default pt-2 pb-1 w-2/3 outline-none text-3xl 
        font-thin hover:cursor-text"
        style={{ boxShadow: `0px 3px 0 0 ${clockColor}` }}
        placeholder={clock.name}
        onChange={changeHandler}
        onBlur={submitHandler}
        name="title"
        value={titleValue}
      ></input>
    </form>
  );
}
