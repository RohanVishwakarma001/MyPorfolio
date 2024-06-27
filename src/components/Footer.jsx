import {
  FaFacebook,
  FaGit,
  FaGithub,
  FaHome,
  FaLinkedinIn,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./FooterStyle.css";
import React from "react";
import { FaLink, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-container__left">
          <div className="location">
            <FaHome size={20} style={{ color: "White", marginRight: "2rem" }} />
            <div>
              <p>Akhari Kurhua Varanasi</p>
              <p>Uttar Pradesh</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone
                size={20}
                style={{ color: "White", marginRight: "2rem" }}
              />
              +91-83170-55505
            </h4>
          </div>
          <div className="email">
            <h4>
              {" "}
              <FaMailBulk
                size={20}
                style={{ color: "White", marginRight: "2rem" }}
              />
              rohanvishwakarma8261@gmail.com
            </h4>
          </div>
        </div>
        <div className="footer-container__right">
          <h4>About Me</h4>
          <p>
            A Full Stack Developer, Specializing in web development, project
            management, Agile methodology, and quality assurance testing.
          </p>
          <div className="social">
            <FaFacebook
              size={30}
              style={{ color: "White", marginRight: "1rem" }}
            />
            <FaGithub
              size={30}
              style={{ color: "White", marginRight: "1rem" }}
            />
            <FaLinkedin
              size={30}
              style={{ color: "White", marginRight: "1rem" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
