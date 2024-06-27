import "./ProjectListStyle.css";
import ProjectLists from "../api/projectList.json";
import ProjectCard from "./ProjectCard";
import React from "react";

function ProjectList() {
  return (
    <div className="project">
      <h1>Projects</h1>
      <div className="project-containor">
        {ProjectLists.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
}

export default ProjectList;
