import styled from "styled-components";
import React from "react";
import Nav from "../../pages/LandingPage/Nav/Nav";
import Logo from "../../generic/Logo/Logo";
const StyledNavBar = styled.nav`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 100;
  color:green;
`;

const NavBar = () => {
  return (
    <StyledNavBar>
      <Logo />
      <Nav />
    </StyledNavBar>
  );
};

export default NavBar;
