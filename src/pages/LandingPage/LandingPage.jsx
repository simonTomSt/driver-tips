import React from "react";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Opening from "./Opening/Opening";
import Opinions from "./Opinions/Opinions";

const LandingPage = () => {
  return (
    <>
      <Opening />
      <About />
      <Opinions />
      <Contact />
    </>
  );
};

export default LandingPage;
