import React from "react";
import styled from "styled-components";
import Nav from "../../pages/LandingPage/Nav/Nav";
import Logo from "../Logo/Logo";

const StyledNavBar = styled.nav`
  width: 100vw;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
