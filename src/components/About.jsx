import React from "react";
import Nav from "./Nav";
import Whoweare from "./HomeContent/Whoweare";
import Footer from "./Footer";

const About = () => {
  return (
    <>
      <Nav />
      <div id="about">
        <Whoweare />
      </div>
      <Footer />
    </>
  );
};

export default About;
