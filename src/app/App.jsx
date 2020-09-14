import React from "react";
import { theme } from "../uttils/theme";
import { ThemeProvider } from "styled-components";
import LandingPage from "../components/landing/LandingPage";

const App = () => (
  <ThemeProvider theme={theme}>
    <>
      {/* <GlobalStyle /> */}

      <LandingPage />
    </>
  </ThemeProvider>
);

export default App;
