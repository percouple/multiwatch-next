import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { setEditingClock } from "../../../state/slices/clockDataSlice";
import blueEditClockIcon from "../../../../stock-data-assets/edit-clock-icon-blue.svg";
import orangeEditClockIcon from "../../../../stock-data-assets/edit-clock-icon-orange.svg";

const StyledEditClockButton = styled.div`
  width: 30px;
  height: 30px;
  background-color: transparent;
  background-size: cover;
  position: relative;
  top: 5px;
  cursor: pointer;
`;

export default function EditClockButton({ clock, clockOn }) {
  const dispatch = useDispatch();
  const currentTheme = useSelector((state) => state.theme.theme);

  const dynamicBackgroundImage =
    clockOn === "clockOn" ? orangeEditClockIcon : blueEditClockIcon;

  const clickHandler = (e) => {
    dispatch(setEditingClock(clock.clockId));
  };

  return (
    <StyledEditClockButton
      onClick={clickHandler}
      style={{ backgroundImage:`url(${dynamicBackgroundImage})` }}
    ></StyledEditClockButton>
  );
}
