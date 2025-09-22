import React from "react";
import cardiology from "../assets/cardiology.png";
import nephrology from "../assets/Nephrology.png";
import dentistry from "../assets/Dentistry.png";
import gastroenterology from "../assets/Gastroenterology.png";
import rheumatology from "../assets/Rheumatology.png";
import neurology from "../assets/Neurology.png";
import endocrinology from "../assets/Endocrinology.png";
import psychiatry from "../assets/Psychiatry.png";
import oncology from "../assets/Oncology.png";
import epidemiology from "../assets/Epidemiology-studies.png";
import ampule from "../assets/ampule.jpg";

const Because = () => {
  return (
    <>
      <section className="stack-section" id="section-because">
        <h1 id="title-because">Because...</h1>

        <p>
          ...MICRO's boutique scale operation allows us unflinching focus and
          unmatched efficiency comparing to corporate behemoths.
          <br />
          Our veteran team share decades of experience and what they do, they do
          the best in the business.
          <br />
          Our strong performance is evident in speed, attention to detail, well
          established and efficient communication with Regulatory Authorities.
        </p>
        <br />
        <div className="ampule-container">
          <img src={ampule} alt="ampule" />
        </div>
        <p id="excell-title">We excell in:</p>
        <ul className="because-excell">
          <li>Therapeutic expertise</li>
          <li>CRA (personell) proficiency</li>
          <li>CT contingency planning </li>
          <li>Cost effectivness</li>
        </ul>
      </section>

      <section className="stack-section" id="section-areas">
        <h2 id="areas-title">Therapeutic areas</h2>
        <div className="areas">
          <div className="areas-item">
            <img src={cardiology} alt="" />
            Cardiology
          </div>
          <div className="areas-item">
            <img src={nephrology} alt="" />
            Nephrology
          </div>
          <div className="areas-item" id="dent">
            <img src={dentistry} alt="" />
            Dentistry
          </div>
          <div className="areas-item" id="gastro">
            <img src={gastroenterology} alt="" />
            Gastroenterology
          </div>
          <div className="areas-item">
            <img src={rheumatology} alt="" />
            Rheumatology
          </div>
          <div className="areas-item">
            <img src={epidemiology} alt="" />
            Epidemiology
          </div>
          <div className="areas-item">
            <img src={oncology} alt="" />
            Oncology
          </div>
          <div className="areas-item">
            <img src={psychiatry} alt="" />
            Psychiatry
          </div>
          <div className="areas-item">
            <img src={neurology} alt="" />
            Neurology
          </div>
          <div className="areas-item">
            <img src={endocrinology} alt="" />
            Endocrinology
          </div>
        </div>
        <p>
          Our team is highly experienced working with world's top medical
          systems, same as with sponsors of limited resources and/or experience.
          All the same, we remain equally meticulous and rigorous in
          performance, offering guidance through every step of the process. Our
          sponsors are encouraged to address any issue, request or clarification
          down the road from the startup to the closeout.
        </p>

        <p>
          Micro promotes development of ongoing communication, personalized to
          each sponsor. We optimize it into a solid monitoring program that
          gives the sponsor 24/7/365 access to enrolment and compliance.
        </p>

        <p>
          Our veteran CRA team, as the primary controlers, secures data
          integrity and maintains farmcovigilance.
        </p>
      </section>
    </>
  );
};

export default Because;
