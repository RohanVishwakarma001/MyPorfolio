import "./ProjectCardStyle.css";
import React from "react";
import { NavLink } from "react-router-dom";
import proIMG from "../../public/img/IntroImage.jpg";
function ProjectCard(props) {
  // eslint-disable-next-line react/prop-types
  const { head, desc } = props.project;
  return (
    <div className="project_card">
      <img src={proIMG} alt="project_img" />
      <h2 className="project-title">{head}</h2>
      <div className="project-dec">
        <p>{desc}</p>
      </div>
      <div className="project-btn">
        <NavLink to={"#"} className="btn">
          View
        </NavLink>
        <NavLink to={"#"} className="btn">
          Source
        </NavLink>
      </div>
    </div>
  );
}

export default ProjectCard;
