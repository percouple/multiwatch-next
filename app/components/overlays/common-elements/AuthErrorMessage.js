import React from "react";
import styled from "styled-components";
import { themes } from "../../../helper-functions";

const StyledMessage = styled.div`
  font-size: 0.9rem;
  display: flex;
  justify-content: center;
`;

export default function ErrorMessage({ message }) {
  return (
    <StyledMessage
      style={{
        color: `${themes.dark.highlightColor.clockOn}`,
      }}
    >
      {message}
    </StyledMessage>
  );
}
