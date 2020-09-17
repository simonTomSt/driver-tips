import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../../components/Button/Button";
import NavBar from "../../../components/NavBar/Navbar";
import Text from "../../../components/Text/Text";
import bgPhoto from "./Opening.jpg";

const StyledOpening = styled.section`
  background-image: url(${bgPhoto});
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    background-color: rgba(0%, 0%, 0%, 0.55);
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
  }
  .message {
    position: absolute;
    z-index: 1;
    right: 10%;
    top: 60%;
    transform: translateY(-50%);
    text-align: right;
    width: 100%;
    max-width: 1024px;
    color: ${({ theme }) => theme.colors.white};
    &__header {
      line-height: 4.2rem;
      font-size: ${({ theme }) => theme.fonts.huge};
      span {
        color: ${({ theme }) => theme.colors.distinctive};
        font-style: italic;
      }
    }
    &__slogan {
      margin: 15px 0;
    }
    a {
      margin-left: auto;
    }
  }
`;

const Opening = () => {
  return (
    <StyledOpening>
      <NavBar />
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
