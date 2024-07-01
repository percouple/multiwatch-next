import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteClock, flagForDBUpdate } from "../../../state/slices/clockDataSlice";
import { themes } from "../../../util/cssUtils";
import closeClockIconBlue from "../../../stock-data-assets/close-clock-icon-blue.svg";
import closeClockIconOrange from "../../../stock-data-assets/close-clock-icon-orange.svg";
import styled from "styled-components";

const StyledDeleteButton = styled.div`
  height: 40px;
  width: 40px;
  background-color: transparent;
  cursor: pointer;
`;

export default function DeleteClockButton({ clock, clockOn }) {
  const dispatch = useDispatch();
  const currentTheme = useSelector(( state ) => state.theme.theme);
  const dynamicBackgroundImage =
    clockOn === "clockOn" ? closeClockIconOrange : closeClockIconBlue;

  const deleteHandler = (e) => {
    dispatch(deleteClock(clock.clockId));
    dispatch(flagForDBUpdate());
  }

  return (
    <StyledDeleteButton
      onClick={deleteHandler}
      style={{
        color: `${themes[currentTheme].textColor}`,
        backgroundImage: `url(${dynamicBackgroundImage})`,
      }}
    ></StyledDeleteButton>
  );
}
