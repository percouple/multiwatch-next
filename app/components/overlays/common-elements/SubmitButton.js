import React from "react";
import styled from "styled-components";
import { themes, darken } from "../../../helper-functions";
import { useSelector } from "react-redux";

const StyledCreateUserButton = styled.button`
  background-color: transparent;
  margin: 1rem 5px;
  border-radius: 5px;
  min-width: 10rem;
  min-height: 2rem;
`;

export default function SubmitButton({ disabledSubmit, textContent }) {
  const currentTheme = useSelector(( state ) => state.theme.theme);

  return <StyledCreateUserButton
    id="createUserButton"
    style={
      disabledSubmit
        ? {
            // border: `3px solid ${themes.dark.backgroundColor}`,
            border: `none`,
            backgroundColor: `${darken(themes.light.backgroundColor, 40)}`,
            color: `${themes[currentTheme].textColor}`,
          }
        : {
            border: `3px solid ${themes[currentTheme].highlightColor.clockOff}`,
            color: `${themes[currentTheme].textColor}`,
            cursor: "pointer",
          }
    }
    disabled={disabledSubmit}
  >
    {textContent}
  </StyledCreateUserButton>;
}
