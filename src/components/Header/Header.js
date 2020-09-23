import styled from "styled-components";

const Header = styled.h2`
  font-size: ${({ theme, size }) =>
    theme.handleProps(theme.fonts, size, "larger")};
  color: ${({ theme, txtcolor }) =>
    theme.handleProps(theme.colors, txtcolor, "common")};
  font-weight: ${({ theme, weight }) =>
    theme.handleProps(theme.fonts, weight, "semiBold")};
  text-align: ${({ center }) => `center`};
  margin: 20px 0;
`;

export default Header;
