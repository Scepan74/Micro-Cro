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

const Areas = () => {
  return (
    <section className="stack-section" id="section-areas">
      <div className="top-areas">
        <h1 id="areas-title">Therapeutic areas</h1>
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
      </div>
      <div className="bottom-areas">
        <p>
          Regardless of your level of experience and/or resources, we remain
          equally meticulous and rigorous in performance. Our team will guide
          you through every step of the process. Our sponsors are encouraged to
          address any issue or request for clarification down the road, from the
          startup to the closeout.
          <br />
          Micro promotes development of ongoing communication. We optimize it
          into a solid monitoring program that gives the sponsor 24/7/365 access
          to enrolment and compliance. Our veteran CRA team, as the primary
          controlers, secures data integrity and maintains farmcovigilance.
        </p>
      </div>
    </section>
  );
};

export default Areas;
