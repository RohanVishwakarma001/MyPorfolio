import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import PricingCard from "../components/PricingCard";
import AboutSection from "../components/AboutSection";
function About() {
  return (
    <>
      <Navbar />
      <HeroImg heading="ABOUT." text="I'm friendly Full Stack Web Developer." />
      <AboutSection />
      <PricingCard />
      <Footer />
    </>
  );
}

export default About;
