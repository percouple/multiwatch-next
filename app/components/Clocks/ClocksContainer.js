import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClockContainer from "./sub-components/ClockContainer";
import EditClockContainer from "./sub-components/EditClockContainer";
import { setClocksMessage } from "../../state/slices/errorMessagesSlice";

export default function ClocksContainer(props) {
  const dispatch = useDispatch();
  const clockData = useSelector((state) => state.clocks.currentClocks);

  // Display error message if no clocks are found for the user
  useEffect(() => {
    if (clockData.length === 0) {
      dispatch(
        setClocksMessage(
          'No clocks found for this user, use the "+" above to create one'
        )
      );
    } else {
      dispatch(setClocksMessage(""));
    }
  }, [clockData]);

  return (
    <div className="flex justify-center">
      <div className="flex justify-center items-center flex-wrap w-full">
        {clockData.map((clock, idx) => (
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
        ))}
      </div>
    </div>
  );
}
