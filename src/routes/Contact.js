import React from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import ContactImg from "../assets/2.jpg";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm"; 

function Contact() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={ContactImg} title="Contact" />
      <ContactForm /> {/* Add the ContactForm component here */}
      <Footer />
    </>
  );
}

export default Contact;
