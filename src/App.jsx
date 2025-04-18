import LogoSection from "./Components/sections/LogoSection";
import NavBar from "./Components/NavBar";
import Hero from "./Components/sections/Hero";
import ShowCaseSection from "./Components/sections/ShowCaseSection";
import FeaturedCards from "./Components/FeaturedCards";
import ExperienceSection from "./Components/sections/ExperienceSection";
import TechStack from "./Components/sections/TechStack";
import Testimonials from "./Components/sections/Testimonials";
import Contact from "./Components/sections/Contact";
import Footer from "./Components/sections/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeaturedCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
