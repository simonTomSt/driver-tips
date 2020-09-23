import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as Scroll } from "react-scroll";
import styled, { css } from "styled-components";
import Button from "../../../components/Button/Button";
import Hamburger from "../../../generic/Hamburger/Hamburger";
import media from "styled-media-query";

const scrollSettings = {
  activeClass: "active",
  spy: true,
  smooth: true,
  offset: 50,
  duration: 500,
};
const StyledNav = styled.nav`
  width: 90%;
  max-width: 600px;
  .hamburger {
    position: fixed;
    right: 10%;
    top: 35px;

    z-index: 1001;
  }
  .menu {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 100vw;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0%, 0%, 0%, 0.95);
    transform: translateX(-100%);
    transition: 0.7s;
    &.opened {
      transform: translateX(0%);
    }
  }

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

  ${media.greaterThan("860px")(css`
    .hamburger {
      display: none;
    }
    .menu {
      position: inherit;
      background-color: transparent;
      transform: none;
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-direction: row;
    }
  `)}
`;

const Nav = () => {
  const [opened, setOpened] = useState(false);
  return (
    <StyledNav>
      <div className='hamburger'>
        <Hamburger toggle={setOpened} />
      </div>
      <div className={opened ? "menu opened" : "menu"}>
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
      </div>
    </StyledNav>
  );
};

export default Nav;
