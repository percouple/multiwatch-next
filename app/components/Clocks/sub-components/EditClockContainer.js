import React, { useState } from "react";
import SaveButton from "./edit-clock-components/SaveButton";
import EditStats from "./edit-clock-components/EditStats";
import EditTitle from "./edit-clock-components/EditTitle";
import CurrentSessionClock from "./CurrentSessionClock";
import CancelEditClockButton from "./edit-clock-components/CancelEditClockButton";
import { useDispatch, useSelector } from "react-redux";
import {
  editClock,
  flagForDBUpdate,
} from "../../../state/slices/clockDataSlice";
import { darken, shadow } from "../../../util/cssUtils";

export default function EditClockContainer({ clock }) {
  const [currentClock, setCurrentClock] = useState(clock);
  const [errMessage, setErrMessage] = useState("");
  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMITTING");
    console.log(currentClock);
    dispatch(editClock(currentClock));
    dispatch(flagForDBUpdate());
  };

  return (
    <div
      className={
        "p-4 flex flex-col justify-center items-center rounded-lg m-8 w-80 md:w-full border-2 border-gray-200  bg-white shadow-lg"
      }
    >
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex justify-center items-center max-w-full">
          <EditTitle
            currentClock={currentClock}
            oldClock={clock}
            setCurrentClock={setCurrentClock}
          />
          <CancelEditClockButton clock={currentClock} />
        </div>
        <div className="flex justify-center items-center w-full">
          <CurrentSessionClock secondsPassed={0} />
        </div>
        <SaveButton currentClock={currentClock} setErrMessage={setErrMessage} />
        <EditStats
          currentClock={currentClock}
          oldClock={clock}
          setCurrentClock={setCurrentClock}
          setErrMessage={setErrMessage}
        />
      </form>
      {errMessage && <div>{errMessage}</div>}
    </div>
  );
}
