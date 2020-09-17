import styled from "styled-components";

const Text = styled.p`
  color: ${({ theme, txtcolor }) =>
    theme.handleProps(theme.colors, txtcolor, "common")};
  font-size: ${({ theme, size }) =>
    theme.handleProps(theme.fonts, size, "normal")};
`;

export default Text;
