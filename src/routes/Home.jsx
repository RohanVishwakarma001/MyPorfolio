import React from "react";
import Navbar from "../components/Navbar";
import HeroImage from "../components/HeroImage";
import Footer from "../components/Footer";
import PricingCard from "../components/PricingCard";

function Home() {
  return (
    <>
      <Navbar />
      <HeroImage />
      <PricingCard />
      <Footer />
    </>
  );
}

export default Home;
