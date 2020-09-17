import { darken } from "polished";
import React from "react";
import styled from "styled-components";

const handlePropColor = (colors, color, defaultColor) => {
  if (colors.hasOwnProperty(color)) {
    return colors[color];
  } else if (color) {
    return color;
  } else {
    return colors[defaultColor];
  }
};

const StyledButton = styled.button`
  position: relative;
  overflow: hidden;
  background-color: ${({ theme, bgColor }) =>
    handlePropColor(theme.colors, bgColor, "common")};
  color: ${({ theme, txtColor }) =>
    handlePropColor(theme.colors, txtColor, "white")};
  border-radius: ${({ theme, radius }) =>
    radius ? radius + "px" : theme.variables.primaryRadius};
  padding: 15px 10px;

  :hover {
    background-color: ${({ theme, bgColor }) =>
      darken(0.2, handlePropColor(theme.colors, bgColor, "common"))};
  }
  :after {
    content: "";
    position: absolute;
    width: 0%;
    height: 0%;
    top: 50%;
    left: 50%;
    transform-style: flat;
    transform: translate3d(-50%, -50%, 0);
    background: rgba(100%, 100%, 100%, 0.2);
    border-radius: 100%;
    transition: width 0.2s ease, height 0.2s ease;
  }

  :active {
    &:after {
      width: 150%;
      height: 150%;
    }
  }
`;

const Button = ({ children, bgColor, txtColor, radius, content }) => {
  return (
    <StyledButton bgColor={bgColor} txtColor={txtColor} radius={radius}>
      {content ? content : children}
    </StyledButton>
  );
};

export default Button;
