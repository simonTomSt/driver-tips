import React from "react";
import styled from "styled-components";

const handleProps = (propsObj, propKey, defaultKey) => {
  if (propsObj.hasOwnProperty(propKey)) {
    return propsObj[propKey];
  } else if (propKey) {
    return propKey;
  } else {
    return propsObj[defaultKey];
  }
};

const Text = styled.p`
  color: ${({ theme, txtcolor }) =>
    handleProps(theme.colors, txtcolor, "common")};
  font-size: ${({ theme, size }) => handleProps(theme.fonts, size, "normal")};
`;

export default Text;
