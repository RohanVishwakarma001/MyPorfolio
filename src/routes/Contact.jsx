import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg from "../components/HeroImg";
import Form from "../components/Form";
function Contact() {
  return (
    <>
      <Navbar />
      <HeroImg heading="CONTACT." text="Contact me for know more about me" />
      <Form />
      <Footer />
    </>
  );
}

export default Contact;
