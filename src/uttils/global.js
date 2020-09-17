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
`;

export default GlobalStyle;
