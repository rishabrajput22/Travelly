import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import HeroImg from "../assets/12.jpg";
import Destination from "../components/Destination";
import Trip from "../components/Trip";
import Footer from "../components/Footer";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero
        cName="hero"
        heroImg={HeroImg}
        title="Your Journey Your Story"
        text="Choose your Favourite Destination"
        buttonText="Travel plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer/>
    </div>
  );
}

export default Home;
