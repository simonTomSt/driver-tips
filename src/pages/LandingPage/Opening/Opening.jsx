import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import Button from "../../../components/Button/Button";
import NavBar from "../../../generic/NavBar/Navbar";
import Text from "../../../components/Text/Text";

import media from "styled-media-query";
import drivingVideo from "./driving.mp4";

const StyledOpening = styled.section`
  background-color: darkgrey;
  width: 100%;
  height: 100vh;
  position: relative;
  overflow: hidden;
  ::after {
    content: "";
    position: absolute;
    background-color: rgba(0%, 0%, 0%, 0.7);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .message {
    position: absolute;
    z-index: 1;
    right: 0;
    top: 60%;
    transform: translateY(-50%);
    text-align: center;
    padding: 0 15px;
    width: 100%;
    max-width: 1024px;
    color: ${({ theme }) => theme.colors.white};
    &__header {
      line-height: 3.2rem;
      font-size: ${({ theme }) => theme.fonts.larger};
      span {
        color: ${({ theme }) => theme.colors.distinctive};
        font-style: italic;
      }
    }
    &__slogan {
      margin: 25px 0 50px 0;
    }
    a {
      margin: 0 auto;
    }
  }
  .background-video {
    min-width: 100%;
    min-height: 100%;
  }
  ${media.greaterThan("1024px")(css`
    .message {
      right: 10%;
      text-align: right;
      &__header {
        line-height: 4.2rem;
        font-size: 3rem;
      }
      &__slogan {
        margin: 45px 0;
      }
      a {
        margin-right: 0px;
      }
    }
  `)}
`;

const Opening = () => {
  return (
    <StyledOpening>
      <NavBar />
      <video autoPlay loop muted className='background-video'>
        <source src={drivingVideo} type='video/mp4' />
      </video>
      <div className='message'>
        <h1 className='message__header'>
          Chcesz stać się lepszym kierowcą? Dołącz do <span>Driver-Tips</span>{" "}
          już dziś!
        </h1>
        <Text txtcolor='white' size='larger' className='message__slogan'>
          Czekają na ciebie quizy, porady oraz forum z wspaniałą społecznością.
        </Text>
        <Button as={Link} to='/logowanie' bgcolor='distinctive'>
          Zacznij teraz
        </Button>
      </div>
    </StyledOpening>
  );
};

export default Opening;
