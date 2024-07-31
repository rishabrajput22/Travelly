import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import SerImg from "../assets/1.jpg";
import Footer from "../components/Footer";
import Trip from "../components/Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={SerImg} title="Service" />
      <Trip />
      <Footer />
    </>
  );
}

export default Service;
