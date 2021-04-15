import React from "react";
import { ReactComponent as CheckMark } from "../images/CheckMark.svg";
const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-title">
        Hello. <br />
        My Name is Chris.
      </div>
      <hr align="left" className="separator" />
      <div className="bio">
        I am a Full Stack Developer with professional experience with mulitple
        programming languages and frameworks. On this site I will showcase some
        of my work and lay out my skillset. I am frequently continuing my
        learning of new skills and langauges so this page will be updated
        frequently. Feel free to reach out if you have any questions! Thanks.
      </div>
      <div className="work">
        <CheckMark />
        <p>Available for software work – say hello</p>
      </div>
    </div>
  );
};

export default HeroSection;
