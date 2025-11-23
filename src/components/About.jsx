import logo from "../assets/micrologo.png";
import tete from "../assets/tete.jpg";

const About = () => {
  return (
    <section className="stack-section" id="about">
      <div className="top-about">
        <p>
          <img id="landing-logo" src={logo} alt="logo" />
          is a compact, independent Clinical Research Organisation providing
          excellence of services through cost-effective solutions.
        </p>
      </div>
      <div className="advantages-container">
        <div className="advantages">
          <div className="box" id="box-1">
            <ul>
              <li className="inline">Stand-alone feasibility</li>

              <li className="inline">Site selection</li>

              <li className="inline">Recruitment</li>
            </ul>
          </div>
          <div className="box" id="box-2">
            <ul>
              <li className="inline"> Comunication with Authorities</li>
              <li className="inline"> Licensing</li>
            </ul>
          </div>
          <div className="box" id="box-3">
            <ul>
              <li className="inline"> Negotiation</li>

              <li className="inline">Monitoring</li>

              <li className="inline">Translations</li>
            </ul>
          </div>
        </div>
        <div className="tete-container">
          <img src={tete} alt="tete" id="tete" />
        </div>
      </div>
      <div className="bottom-about">
        <p>
          Advantages we offer are meticulous recruitment, site speed and short
          timelines for initial Regulatory Authorities approvals. In addition,
          we provide a full administrative support such as certified
          translations of documentation, etc.
        </p>
      </div>
    </section>
  );
};
export default About;
