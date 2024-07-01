import React from "react";
import styled from "styled-components";

const StyledDisplayMessage = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  margin-top: 4rem;
`;

export default function ClockDisplayResponseMessage({ message }) {
  return (
    <div style={{display: 'flex', justifyContent: 'center'}}>
      <StyledDisplayMessage>{message}</StyledDisplayMessage>
    </div>
  );
}
