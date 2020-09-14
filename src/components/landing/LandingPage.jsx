import React from "react";
import styled from "styled-components";

const LandingPage = () => {
  const StyledWrapper = styled.div`
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: ${({ theme }) => theme.fonts.bold};
    font-size: ${({ theme }) => `${theme.fonts.huge}rem`};
  `;

  return (
    <>
      <StyledWrapper>ssdsdsd</StyledWrapper>
    </>
  );
};

export default LandingPage;
