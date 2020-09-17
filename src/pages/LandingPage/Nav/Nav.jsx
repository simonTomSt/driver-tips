import React from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import styled from "styled-components";
import Button from "../../../components/Button/Button";

const scrollSettings = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500,
};
const StyledNav = styled.nav`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  a {
    cursor: pointer;
    font-size: ${({ theme }) => theme.fonts.large};
    font-weight: ${({ theme }) => theme.fonts.semiBold};
    transition: ${({ theme }) => theme.variables.cursorTransition};
    color: ${({ theme }) => theme.colors.darkenWhite};
    :hover {
      color: ${({ theme }) => theme.colors.white};
    }
    &.active {
      color: ${({ theme }) => theme.colors.distinctive};
    }
  }
`;

const Nav = () => {
  return (
    <StyledNav>
      <Scroll to='o-aplikacji' {...scrollSettings}>
        O aplikacji
      </Scroll>
      <Scroll to='opinie' {...scrollSettings}>
        Opinie
      </Scroll>
      <Scroll to='kontakt' {...scrollSettings}>
        Kontakt
      </Scroll>
      <Button as={Link} to='/pulpit' bgcolor='neutral'>
        Zaloguj się
      </Button>
    </StyledNav>
  );
};

export default Nav;
