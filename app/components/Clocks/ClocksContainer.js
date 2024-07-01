import React, { useEffect } from "react";
import styled from "styled-components";
import ClockContainer from "./sub-components/ClockContainer";
import EditClockContainer from "./sub-components/EditClockContainer";
import { useDispatch, useSelector } from "react-redux";
import { setClocksMessage } from "../../state/slices/errorMessagesSlice";

const StyledClocksContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`;

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
    <div style={{ display: "flex", justifyContent: "center" }}>
      <StyledClocksContainer>
        {clockData.map((clock, idx) => {
          return clock.editing ? (
            <EditClockContainer key={clock.clockId}
            clock={clock}/>
          ) : (
            <ClockContainer
              id={clock.clockId}
              key={clock.clockId}
              clockInfo={clock}
              punchedIn={props.punchedIn}
              onPunchIn={props.handlePunchIn}
              onPunchOut={props.handlePunchOut}
            />
          );
        })}
      </StyledClocksContainer>
    </div>
  );
}
