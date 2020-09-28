import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import Button from "../../../components/Button/Button";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import Text from "../../../components/Text/Text";
import tipsPhoto from "./tips.png";
import quizPhoto from "./quiz.png";
import forumPhoto from "./forum.jpg";

const StyledAbout = styled.section`
  padding: 50px 10px;

  .feature {
    text-align: center;
    width: 100%;
    max-width: 640px;
    margin: 20px auto;
    text-align: center;
    border: 2px solid ${({ theme }) => theme.colors.neutral};
    border-radius: ${({ theme }) => theme.variables.primaryRadius};
    padding: 10px;
    p {
      line-height: 1.5rem;
    }
  }
  img {
    display: none;
  }
  a {
    margin: 20px auto;
  }
  ${media.greaterThan("medium")(css`
  & > div {
    display:flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    display: block;
    width: 250px;
  }
  .row{
    align-items: center;
    margin:0 auto;
    justify-content: space-evenly !important;
  }
    .feature {
  margin: 50px;
  `)}
`;

const About = () => {
  return (
    <StyledAbout id='o-aplikacji'>
      <Header center size='largest'>
        Co znajdziesz w DRIVER-TIPS?{" "}
      </Header>
      <Container>
        <div className='row'>
          <article className='feature'>
            <Header size='normal'>
              {" "}
              Porady, które poszerzą twoją wiedzę i umiejętności{" "}
            </Header>
            <Text>
              {" "}
              Liczne porady, regularnie aktualizowane przez społeczność. Każdego
              tygodnia wybierana jest najlepsza porada tygodnia. Użytkonwnicy
              mją możliwość oceniania oraz komentowania porad. Załóż konto i
              doda swoją poradę!{" "}
            </Text>
          </article>
          <img src={tipsPhoto} alt='Tips' />
        </div>

        <div className='row'>
          <img src={forumPhoto} alt='Forum' />
          <article className='feature'>
            <Header size='normal'>Forum ze wspaniałą społecznością</Header>
            <Text>
              {" "}
              Na naszym forum możesz pisać swoje przemyślenia dotyczące nowych
              porad, dowiedzieć się nowych rzeczy od naszej społeczności oraz
              zjednoczyć się z całą grupą fanów motoryzacji.
            </Text>
          </article>
        </div>
        <div className='row'>
          <article className='feature'>
            <Header size='normal'>
              {" "}
              Quizy, dzięki którym sprawdzisz swoją wiedzę
            </Header>
            <Text>
              {" "}
              Nasze Quizy to szereg pytań, na które trzeba odpowiedzioeć w
              ograniczonym czasie. Nie czekaj sprawdź czy jesteś naprawdę dobrym
              kierowcą!{" "}
            </Text>
          </article>
          <img src={quizPhoto} alt='Quiz' />
        </div>
      </Container>
      <Button as={Link} to='/logowanie' bgcolor='neutral'>
        {" "}
        Sprawdź nas!{" "}
      </Button>
    </StyledAbout>
  );
};

export default About;
