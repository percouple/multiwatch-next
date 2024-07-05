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
} from "../../state/slices/clockDataSlice";
import { nonTailwindColors } from "../../../helper-functions";

export default function EditClockContainer({ clock }) {
  const [currentClock, setCurrentClock] = useState(clock);
  const [errMessage, setErrMessage] = useState("");

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);
  const color = nonTailwindColors[theme].editing;

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
        "p-4 w-[300px] flex flex-col justify-center items-center shadow-xl border-solid border-4 rounded-lg m-8 border-editClockColor "
      }
    >
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center"
      >
        <div className="flex justify-between items-center w-full mb-4">
          <EditTitle
            currentClock={currentClock}
            oldClock={clock}
            setCurrentClock={setCurrentClock}
            color={color}
          />
          <div className="w-[40px]"></div>
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
      {errMessage && (
        <div className="flex justify-center text-center mt-4">{errMessage}</div>
      )}
    </div>
  )
}
