import "./HeroImageStyle.css";
import IntriImg from "../../public/img/IntroImage.jpg";
import React from "react";
import { Link } from "react-router-dom";

function HeroImage() {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-image" src={IntriImg} />
      </div>
      <div className="contant">
        <p>HI, I"M ROHAN VISHWAKARMA</p>
        <h1>FULL STACK WEB DEVELOPER</h1>
        <div className="button">
          <Link to={"/project"} className="btn">
            Project
          </Link>
          <Link to={"/contact"} className="btn-light">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroImage;
