import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { secondsToTime } from "../../../../helper-functions";

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

const StyledRight = styled.input`
  padding: 0.25rem;
  padding-left: 0.5rem;
  border-left: 1px solid;
  background-color: transparent;
  color: white;
  border: none;
  outline: none;
  font-size: 1rem;
  align-items: center;
  position: relative;
  width: 100%;
  transition: border-color 0.2s ease-in-out;

  &:focus::after {
    content: "jkfjfjfjfj";
    position: absolute;
    left: 0;
    top: 24px;
    min-width: 200px;
    border: 1px #aaaaaa solid;
    border-radius: 10px;
    background-color: #ffffcc;
    padding: 12px;
    color: #000000;
    font-size: 14px;
    z-index: 1;
  }
`;

const StyledLeft = styled.div`
  border-right: 1px solid;
  padding: 0.25rem;
  padding-right: 0.5rem;
`;

export default function EditStats({ currentClock, oldClock, setCurrentClock, setErrMessage }) {

  let changeHandler = (e) => {
    const { value, name } = e.target;
    if (isNaN(value)) {
      setErrMessage(() => "Only digits accepted as input")
    } else {
      setCurrentClock(oldStats => ({...oldStats, [name]: Number(value)}));
    }
  };

  return (
    <StyledStatContainer>
      <StyledLeft>Last Session</StyledLeft>
      <StyledRight
        name="lastSessionTime"
        onChange={changeHandler}
        value={currentClock.lastSessionTime}
        placeholder={secondsToTime(oldClock.lastSessionTime)}
      ></StyledRight>
      <StyledLeft>Today </StyledLeft>
      <StyledRight
        name="todaySessionTime"
        onChange={changeHandler}
        value={currentClock.todaySessionTime}
        placeholder={secondsToTime(oldClock.todaySessionTime)}
      ></StyledRight>
      <StyledLeft>This Week </StyledLeft>
      <StyledRight
        name="thisWeekTime"
        onChange={changeHandler}
        value={currentClock.thisWeekTime}
        placeholder={secondsToTime(oldClock.thisWeekTime)}
      ></StyledRight>
      <StyledLeft>All Time </StyledLeft>
      <StyledRight
        name="allTime"
        onChange={changeHandler}
        value={currentClock.allTime}
        placeholder={secondsToTime(oldClock.allTime)}
      ></StyledRight>
    </StyledStatContainer>
  );
}
