import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
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
import { themes, darken, shadow } from "../../../helper-functions";

const StyledClockContainer = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin: 30px;
  width: 340px;

  @media screen and (max-width: 420px) {
    width: 80vw;
  }
`;

export default function EditClockContainer({ clock }) {
  let [currentClock, setCurrentClock] = useState(clock);
  let [errMessage, setErrMessage] = useState("");

  const currentTheme = useSelector((state) => state.theme.theme);
  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("SUBMITTING");
    console.log(currentClock);
    dispatch(editClock(currentClock));
    dispatch(flagForDBUpdate());
  };

  // TODO - add support for editing clocks (on server error or otherwise)
  return (
    <StyledClockContainer
      style={
        currentTheme === "dark"
          ? {
              border: `3px solid ${themes[currentTheme].highlightColor.clockOff}`,
              backgroundColor: darken(themes[currentTheme].backgroundColor, 8),
            }
          : {
              boxShadow: `0px 0px 26px 10px ${shadow(
                themes[currentTheme].textColor,
                "0.3"
              )}`,
            }
      }
    >
      <form
        onSubmit={submitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            maxWidth: "100%",
          }}
        >
          <EditTitle
            currentClock={currentClock}
            oldClock={clock}
            setCurrentClock={setCurrentClock}
          />
          <CancelEditClockButton clock={currentClock}/>
          {/* <DeleteClockButton clock={props.clockInfo} clockOn={"clockOff"} /> */}
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%", // Ensure full width
          }}
        >
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
    </StyledClockContainer>
  );
}
