import LogoSection from "./Components/sections/LogoSection";
import NavBar from "./Components/NavBar";
import Hero from "./Components/sections/Hero";
import ShowCaseSection from "./Components/sections/ShowCaseSection";
import FeaturedCards from "./Components/FeaturedCards";
import ExperienceSection from "./Components/sections/ExperienceSection";
import TechStack from "./Components/sections/TechStack";

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
    </>
  );
}

export default App;
