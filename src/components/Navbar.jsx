import React, { useRef, useState } from "react";

const Navbar = () => {
  const whyRef = useRef(null);
  const servicesRef = useRef(null);
  const hireRef = useRef(null);

  return (
    <>
      <nav>
        <a href="#section-because">
          <div className="nav-link" id="nav-why" ref={whyRef}>
            why us ?
          </div>
        </a>
        <a href="#section-services">
          <div className="nav-link" id="nav-services" ref={servicesRef}>
            services
          </div>
        </a>
        <a href="#hire">
          <div className="nav-link" id="nav-hire" ref={hireRef}>
            hire us now
          </div>
        </a>
      </nav>
    </>
  );
};

export default Navbar;
