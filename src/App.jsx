import LogoSection from "./Components/sections/LogoSection";
import NavBar from "./Components/NavBar";
import Hero from "./Components/sections/Hero";
import ShowCaseSection from "./Components/sections/ShowCaseSection";
import FeaturedCards from "./Components/FeaturedCards";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowCaseSection />
      <LogoSection />
      <FeaturedCards />
    </>
  );
}

export default App;
