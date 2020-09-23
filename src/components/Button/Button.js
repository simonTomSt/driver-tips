import { darken } from "polished";
import styled from "styled-components";

const Button = styled.button`
  position: relative;
  overflow: hidden !important;
  display: block;
  width: fit-content;
  font-size: ${({ theme, size }) =>
    theme.handleProps(theme.fonts, size, "normal")} !important;
  font-weight: ${({ theme, weight }) =>
    theme.handleProps(theme.fonts, weight, "regular")} !important;
  background-color: ${({ theme, bgcolor }) =>
    theme.handleProps(theme.colors, bgcolor, "common")};
  color: ${({ theme, txtcolor }) =>
    theme.handleProps(theme.colors, txtcolor, "white")} !important;
  border-radius: ${({ theme, radius }) =>
    theme.handleProps(theme.variables, radius, "primaryRadius")};
  padding: 15px 10px;

  :hover {
    background-color: ${({ theme, bgcolor }) =>
      darken(0.2, theme.handleProps(theme.colors, bgcolor, "common"))};
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
