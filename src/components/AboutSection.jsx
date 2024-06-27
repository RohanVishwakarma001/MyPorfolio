import { Link } from "react-router-dom";
import "./AboutSectionStyle.css";
import TopStackImg from "../../public/img/IntroImage.jpg";
import React from "react";

function AboutSection() {
  return (
    <div className="about-section">
      <div className="about-left">
        <h1>Who Am I</h1>
        <p>
          A full-stack web developer is a person who can develop both client and
          server software. Simply put, full-stack developers comprehend all the
          technologies that go into making a website.
        </p>
        <Link to={"/contact"} className="btn">
          Contact
        </Link>
      </div>
      <div className="about-right">
        <div className="img-containor">
          <div className="img-stack top">
            <img src={TopStackImg} alt="top img" className="imgs" />
          </div>
          <div className="img-stack bottom">
            <img src={TopStackImg} alt="top img" className="imgs" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
