import React from "react";
import Footer from "../../generic/Footer/Footer";
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
      <Footer/>
    </>
  );
};

export default LandingPage;
