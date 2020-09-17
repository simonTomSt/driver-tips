import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCar } from "@fortawesome/free-solid-svg-icons";
const StyledLogo = styled.div`
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: ${({ theme }) => theme.fonts.larger};
  font-weight: ${({ theme }) => theme.fonts.semiBold};
  span {
    color: ${({ theme }) => theme.colors.distinctive};
  }
  .logo-icon {
    color: ${({ theme }) => theme.colors.distinctive};
    margin: 0 10px;
  }
`;
const Logo = () => {
  return (
    <>
      <StyledLogo>
        <FontAwesomeIcon icon={faCar} size='lg' className={"logo-icon"} />

        <span>
          DRIVER <br /> TIPS
        </span>
      </StyledLogo>
    </>
  );
};

export default Logo;
