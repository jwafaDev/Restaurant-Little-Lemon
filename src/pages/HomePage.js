import Hero from "../components/Hero";
import Specials from "../components/Specials";
import Testimonials from "../components/Testimonials";
import About from "../components/About";

function HomePage() {
  return (
    <div className="main">
      <Hero />
      <Specials />
      <Testimonials />
      <About />
    </div>
  );
}

export default HomePage;