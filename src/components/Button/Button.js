import { darken } from "polished";
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

const Button = styled.button`
  position: relative;
  overflow: hidden !important;
  display: block;
  width: fit-content;
  font-size: ${({ theme }) => theme.fonts.normal} !important;
  font-weight: ${({ theme }) => theme.fonts.regular} !important;
  background-color: ${({ theme, bgcolor }) =>
    handlePropColor(theme.colors, bgcolor, "common")};
  color: ${({ theme, txtcolor }) =>
    handlePropColor(theme.colors, txtcolor, "white")} !important;
  border-radius: ${({ theme, radius }) =>
    radius ? radius + "px" : theme.variables.primaryRadius};
  padding: 15px 10px;

  :hover {
    background-color: ${({ theme, bgcolor }) =>
      darken(0.2, handlePropColor(theme.colors, bgcolor, "common"))};
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
    transition-delay: 0.2s;
  }

  :active {
    &:after {
      width: 150%;
      height: 150%;
    }
  }
`;

export default Button;
