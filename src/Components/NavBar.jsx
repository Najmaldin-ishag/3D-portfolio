import { useEffect, useState } from "react";
import { navLinks } from "../../constants";

function NavBar() {
  const [scrolled, setScrolled] = useState(false);

  // useEffect hook to handle scroll events
  useEffect(() => {
    // Function to handle scroll event
    // This function checks if the user has scrolled more than 10 pixels
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      // Update the state variable 'scrolled' based on the scroll position
      setScrolled(isScrolled);
    }; // Check if the user has scrolled more than 10 pixels

    // Add the scroll event listener to the window object
    // This allows us to detect when the user scrolls the page
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove the event listener when the component unmounts
    // This prevents memory leaks and ensures that the event listener is not active when the component is not in use
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a href="#hero" className="logo">
          Najmaldin Ishag
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ name, link }) => (
              <li key={name}>
                <a href={link} className="group">
                  <span>{name}</span>
                  <span className="underline" />
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
}

export default NavBar;
