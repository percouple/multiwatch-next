import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { themes, shadow } from "../../../helper-functions";

const StyledButton = styled.div`
  display: flex;
  justify-content: center;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  margin: 1rem;
  width: 11rem;
  cursor: pointer;
`;

export default function ButtonContainer({ punchedIn, onPunchIn, onPunchOut }) {
  const currentTheme = useSelector(( state ) => state.theme.theme);
  const clockOn = punchedIn ? 'clockOn' : 'clockOff';

  const punchedInStyle = {
    backgroundColor:  `${themes[currentTheme].highlightColor[clockOn]}`,
  };

  const punchedOutStyle = {
    backgroundColor:  `${themes[currentTheme].highlightColor[clockOn]}`,
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        margin: "0.5rem",
      }}
    >
      {punchedIn ? (
        <StyledButton style={punchedOutStyle} onClick={onPunchOut}>
          Stop
        </StyledButton>
      ) : (
        <StyledButton style={punchedInStyle} onClick={onPunchIn}>
          Start
        </StyledButton>
      )}
    </div>
  );
}
