import React from "react";
import styled from "styled-components";
import { themes } from "../../../helper-functions";
import { useSelector } from "react-redux";

const StyledTitle = styled.div`
  display: flex;
  background-color: transparent;
  border: none;
  padding: 4px;
  box-shadow: 0 2px;
  outline: none;
  font-size: 1.5rem;
  margin: 1rem;
  @media (max-width: 420px) {
    width: 75%;
  }
`;

export default function Title({ clock }) {
  const currentTheme = useSelector((state) => state.theme.theme);

  return (
    <StyledTitle style={{ color: themes[currentTheme].textColor }}>
      {clock.name}
    </StyledTitle>
  );
}
