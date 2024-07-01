import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewClock, flagForDBUpdate } from "../../../state/slices/clockDataSlice";
import { nanoid } from "nanoid";
import addIcon from '../../../stock-data-assets/add-icon.svg';

export default function Header() {
  const dispatch = useDispatch();
  let user = useSelector((state) => state.currentUser);

  if (!user) {
    user = "new user";
  }

  const clickHandler = (e) => {
    const clockId = nanoid();
    const clockNeeds = { userId: user, name: "New Clock", clockId: clockId };
    dispatch(addNewClock(clockNeeds));
    dispatch(flagForDBUpdate());
  };

  return (
    <div
      className="relative h-10 w-10 cursor-pointer rounded-md bg-cover"
      style={{
        backgroundImage: `url(${addIcon.src})`,
        borderColor: 'black',
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
      }}
      onClick={clickHandler}
    ></div>
  );
}
