import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ClockContainer from "./sub-components/ClockContainer";
import EditClockContainer from "./sub-components/EditClockContainer";
import { setClocksMessage } from "../state/slices/errorMessagesSlice";

export default function ClocksContainer(props) {

  const clockData = [];
  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clockData.map((clock, idx) =>
          clock.editing ? (
            <EditClockContainer key={clock.clockId} clock={clock} />
          ) : (
            <ClockContainer
              id={clock.clockId}
              key={clock.clockId}
              clockInfo={clock}
              punchedIn={props.punchedIn}
              onPunchIn={props.handlePunchIn}
              onPunchOut={props.handlePunchOut}
            />
          )
        )}
      </div>
    </div>
  );
}
