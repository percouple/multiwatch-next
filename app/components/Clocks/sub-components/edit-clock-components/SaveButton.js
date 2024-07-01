import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { themes, shadow } from "../../../../helper-functions";
import { editClock } from "../../../../state/slices/clockDataSlice";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  width: 11rem;
  outline: none;
  border: none;
  cursor: pointer;
`;

export default function ButtonContainer({ clock }) {
  const currentTheme = useSelector((state) => state.theme.theme);

  const punchedInStyle = {
    backgroundColor: `${themes[currentTheme].highlightColor.clockOn}`,
    color: `${themes[currentTheme].textColor}`,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0.5rem",
      }}
    >
      <StyledButton type="submit" style={punchedInStyle}>
        Save
      </StyledButton>
    </div>
  );
}
