import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import styled, { css } from "styled-components";
import media from "styled-media-query";
import Container from "../../../components/Container/Container";
import Header from "../../../components/Header/Header";
import * as Yup from "yup";
import Button from "../../../components/Button/Button";
const StyledContact = styled.section`
  background-color: ${({ theme }) => theme.colors.distinctive};
  padding: 50px 10px;

  & > div {
    margin-top: 400px;
  }

  .contact {
    &-header {
      margin-right: auto;
      text-align: center;
      padding-bottom: 30px;
    }
    &__error {
      color: ${({ theme }) => theme.colors.neutralLight};
    }
  }
  form {
    position:relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 660px;

    label {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 20px 0;
    }
    input {
      width: 80%;
    }
    textarea {
      height: 150px;
    }
  }
  ${media.greaterThan("medium")(css`
    & {
      padding: 50px 30px;
    }
    .contact-header {
      text-align: left;
    }
  `)}
  ${media.greaterThan("1025px")(css`
    & > div {
      margin-top: 250px;
    }

    form {
      label {
        align-items: flex-start;
      }
      align-items: flex-start;
    }
  `)}
  ${media.greaterThan("1537px")(css`
    & > div {
      margin-top: 130px;
    }
  `)}
`;

const Contact = () => {
  return (
    <StyledContact id='kontakt'>
      <Container>
        <Header size='largest' className='contact-header'>
          {" "}
          Masz pytania? Wyślij nam wiadomość{" "}
        </Header>

        <Formik
          initialValues={{ name: "", email: "", message: "" }}
          onSubmit={(values, { resetForm }) => {
            console.log(values);
            resetForm({ name: "", email: "", message: "" });
          }}
          validationSchema={Yup.object({
            name: Yup.string()
              .trim()
              .max(15, "Imię nie może zawierać więcej niż 15 znaków !")
              .matches(/^[A-Z]+$/gi, "Niepoprawne imię!")
              .required("Podaj swoje imię!"),
            email: Yup.string()
              .email("Podaj poprawny email!")
              .required("Podaj swój email!"),
            message: Yup.string()
              .min(60, "Wiadomość musi zawierać min. 60 znaków!")
              .required("Wpisz swoją wiadomość!"),
          })}
        >
          <Form>
            <label className='contact__label'>
              Wpisz swoje imię
              <Field type='text' name='name' id='name' />
              <ErrorMessage
                name='name'
                component='p'
                className='contact__error'
              />
            </label>
            <label className='contact__label'>
              Wpisz swój email
              <Field type='email' name='email' id='email' />
              <ErrorMessage
                name='email'
                component='p'
                className='contact__error'
              />
            </label>
            <label className='contact__label contact__label--message'>
              Wpisz swoją wiadomość
              <Field as='textarea' type='text' name='message' id='message' />
              <ErrorMessage
                name='message'
                component='p'
                className='contact__error'
              />
            </label>

            <Button
              style={{ width: "30%", minWidth: "100px", maxWidth: "350px" }}
              type='submit'
            >
              {" "}
              Wyślij{" "}
            </Button>
          </Form>
        </Formik>
      </Container>
    </StyledContact>
  );
};

export default Contact;
