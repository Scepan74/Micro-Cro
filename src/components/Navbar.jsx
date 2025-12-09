import React, { useRef } from "react";

const Navbar = () => {
  const whyRef = useRef(null);
  const servicesRef = useRef(null);
  const hireRef = useRef(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      history.replaceState(null, "", `#${id}`);
    }
  };

  return (
    <nav>
      <div
        className="nav-link"
        id="nav-why"
        ref={whyRef}
        onClick={() => scrollToSection("section-because")}
      >
        why us ?
      </div>
      <div
        className="nav-link"
        id="nav-services"
        ref={servicesRef}
        onClick={() => scrollToSection("section-services")}
      >
        services
      </div>
      <div
        className="nav-link"
        id="nav-hire"
        ref={hireRef}
        onClick={() => scrollToSection("hire")}
      >
        hire us now
      </div>
    </nav>
  );
};

export default Navbar;
