import React from "react";
import styled from "styled-components";
import cancelEditIcon from "../../../../stock-data-assets/cancel-edit-icon.svg";
import { useDispatch } from "react-redux";
import { setEditingClock } from "../../../../state/slices/clockDataSlice";

const StyledCancelEditButton = styled.div`
  height: 40px;
  width: 40px;
  background-color: transparent;
  cursor: pointer;
`;

export default function CancelEditClockButton({ clock }) {
  const dispatch = useDispatch();
  const clickHandler = (e) => {
    dispatch(setEditingClock(clock.clockId))
  }
  return (
    <StyledCancelEditButton
      style={{ backgroundImage: `url(${cancelEditIcon})` }}
      onClick={clickHandler}
    ></StyledCancelEditButton>
  );
}
