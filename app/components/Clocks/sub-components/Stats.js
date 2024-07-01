import React, { useEffect } from "react";
import styled from "styled-components";
import { secondsToTime } from "../../../helper-functions";

const StyledStatContainer = styled.div`
  font-weight: normal;
  display: grid;
  grid-template-rows: repeat(3, minmax(0, 1fr));
  grid-template-columns: repeat(2, minmax(0, 1fr));
  text-align: center;
  max-width: 18rem;
  margin-left: auto;
  margin-right: auto;
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

const StyledRight = styled.div`
  padding: 0.25rem;
  padding-left: 0.5rem;
  border-left: 1px solid;
`;

const StyledLeft = styled.div`
  border-right: 1px solid;
  padding: 0.25rem;
  padding-right: 0.5rem;
`;

// TODO - Handle resets (day, week, etc)

export default function Stats({ punchedIn, secondsPassed, clock }) {
  // const todayDisplayTime =
  let todayDisplayTime, thisWeekDisplayTime, allTimeDisplayTime;

  // check whether we're punched in -
  // if so, then display should be state + secondsPassed
  // else then display should be state
  if (punchedIn) {
    todayDisplayTime = clock.todaySessionTime + secondsPassed;
    thisWeekDisplayTime = clock.thisWeekTime + secondsPassed;
    allTimeDisplayTime = clock.allTime + secondsPassed;
  } else {
    todayDisplayTime = clock.todaySessionTime;
    thisWeekDisplayTime = clock.thisWeekTime;
    allTimeDisplayTime = clock.allTime;
  }

  return (
    <StyledStatContainer>
      <StyledLeft>Last Session </StyledLeft>
      <StyledRight>{secondsToTime(clock.lastSessionTime)}</StyledRight>
      <StyledLeft>Today </StyledLeft>
      <StyledRight>{secondsToTime(todayDisplayTime)}</StyledRight>
      <StyledLeft>This Week </StyledLeft>
      <StyledRight>{secondsToTime(thisWeekDisplayTime)}</StyledRight>
      <StyledLeft>All Time </StyledLeft>
      <StyledRight>{secondsToTime(allTimeDisplayTime)}</StyledRight>
    </StyledStatContainer>
  );
}
