import React from "react";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import Text from "../../../components/Text/Text";
import opinionsUsers from "./opinionsUsers";

const StyledOpinions = styled.section`
  background-color: ${({ theme }) => theme.colors.common};
  padding: 50px 10px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translateY(98%);
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 1300px 400px 0;
    border-color: transparent ${({ theme }) => theme.colors.common} transparent
      transparent;
  }
  .opinion {
    width: 100%;
    text-align: center;
    margin: 80px 0;
    padding: 15px;
    background-color: white;
    border: 2px solid ${({ theme }) => theme.colors.neutral};
    border-radius: 15px;
    max-width: 450px;
    position: relative;
    h2 {
      margin: 100px 0 15px 0;
    }
  }
  .row {
    justify-content: center;
  }
  .user {
    position: absolute;
    width: 200px;
    height: 200px;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    border-radius: 360px;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 0 auto 10px auto;
    border: 2px solid ${({ theme }) => theme.colors.neutral};
    &__rating {
      margin: 15px 0;
    }
    img {
      width: 100%;
    }
  }
  ${media.greaterThan("medium")(css`
    & > div {
      display: flex;
      flex-wrap: wrap;
    }
    .row {
      width: 50%;
      justify-content: space-around;
    }
    .opinion {
      display: flex;
      margin: 20px 60px 20px 100px;
      h2 {
        margin: 15px 0 0 0;
      }
      &__content {
        margin-left: 80px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }
    }
    .user {
      width: 150px;
      height: 150px;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(-50%, -50%);
    }
  `)}
`;

const Opinions = () => {
  return (
    <StyledOpinions id='opinie'>
      <Header center size='largest' txtcolor='white'>
        Co myślą o nas inni
      </Header>
      <Container style={{ marginTop: "60px" }}>
        {opinionsUsers.map(({ id, name, opinion, image, rating }) => (
          <div className='row' key={id}>
            <article className='opinion'>
              <div className='user'>
                <img src={image} alt='user' />
              </div>
              <div className='opinion__content'>
                <Header> {name} </Header>
                <Text size='large' className='user__rating'>
                  {" "}
                  Ocena: <b>{rating}/5 </b>{" "}
                </Text>
                <Text style={{ margin: "0 0 15px 0" }}> {opinion} </Text>
              </div>
            </article>
          </div>
        ))}
      </Container>
    </StyledOpinions>
  );
};

export default Opinions;
