import React, { useState } from "react";
import "./NavbarStyle.css";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import Resume from "../../public/MyResume2.pdf";

const CV_URL = "../../public/MyResume2.pdf";
function Navbar() {
  const [click, setClick] = useState(false);

  const handelClick = () => setClick(!click);

  const [color, setColor] = useState(false);

  const changeColor = () => {
    if (window.scrollY >= 100) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  return (
    <div className={color ? "header header-bg" : "header"}>
      <Link to={"/"}>
        <h1>My Portfolio</h1>
      </Link>

      <ul className={click ? "nav-manu active" : "nav-manu"}>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
        <li>
          <Link to={"/project"}>Project</Link>
        </li>
        <li>
          <Link to={"/about"}>About</Link>
        </li>
        <li>
          <Link to={"/contact"}>Contact</Link>
        </li>
        <li>
          <a href={Resume} download="Resume">
            Downlode My CV
          </a>
        </li>
      </ul>
      <div className="hamburger" onClick={handelClick}>
        {click ? (
          <FaTimes size={20} style={{ color: "white" }} />
        ) : (
          <FaBars size={20} style={{ color: "white" }} />
        )}
      </div>
    </div>
  );
}

export default Navbar;
