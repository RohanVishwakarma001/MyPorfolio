import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import ProjectList from "../components/ProjectList";
function Project() {
  return (
    <>
      <Navbar />
      <HeroImg heading="PROJECTS." text="Some of my recent works." />
      <ProjectList />
      <Footer />
    </>
  );
}

export default Project;
