import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing:border-box;
  }
  body{
    font-size: 1rem;
    font-family:'Rubik', sans-serif;
 color: ${({ theme }) => theme.colors.common};
 font-size: ${({ theme }) => theme.fonts.normal};
    font-weight: ${({ theme }) => theme.fonts.regular};
  }
  a{
    text-decoration: none;
    color: ${({ theme }) => theme.colors.common};
    transition: ${({ theme }) => theme.variables.cursorTransition}; 
  }
  button{
    cursor: pointer;
    border:0;
    outline:0;
    transition:  ${({ theme }) => theme.variables.cursorTransition};
  }
  .row{
    display:flex;
    align-items: center;
    width: 100%;
  }
  input, textarea{
    border:0;
    outline:none;
    background-color: transparent;
    border-bottom: 1.5px solid  ${({ theme }) => theme.colors.common};
    padding:5px;
    margin:5px 0 15px 0;
    &:focus{
      border-color: ${({ theme }) => theme.colors.black};
      border-width: 2px;
    }
  }
  textarea{
    width:80%;
    height:50px;
    resize: none;
    border: 1.5px solid  ${({ theme }) => theme.colors.common};
  }
`;

export default GlobalStyle;
