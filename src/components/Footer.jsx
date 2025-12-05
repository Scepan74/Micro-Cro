import { FaLinkedin } from "react-icons/fa";
import { PiMicrosoftTeamsLogoFill } from "react-icons/pi";
import logo from "../assets/micrologo.png";
import shake from "../assets/shake.jpg";

const Footer = () => {
  return (
    <footer className="stack-section">
      <div className="blanc-layer"></div>
      <h2 id="footer-text">
        <img id="footer-logo" src={logo} alt="logo" /> has a solution for any
        clinical trial challenge. <br />
        We look forward to our collaboration in the near future.
      </h2>

      <div className="footer-img-container">
        <img src={shake} alt="shake" />
      </div>

      <div id="footer-container">
        <div className="location">
          <p className="bold">Micro Cro d.o.o.</p>
          <p>
            178/32, Omladinskih brigada, <br />
            Belgrade, 11000, <br />
            Serbia
          </p>
        </div>

        <a
          href="mailto:office@microcro.com?subject=Contact&body="
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="hireus-container" id="hire">
            <svg
              stroke="currentColor"
              fill="currentColor"
              viewBox="0 0 640 512"
              id="hands"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M488 192H336v56c0 39.7-32.3 72-72 72s-72-32.3-72-72V126.4l-64.9 39C107.8 176.9 96 197.8 96 220.2v47.3l-80 46.2C.7 322.5-4.6 342.1 4.3 357.4l80 138.6c8.8 15.3 28.4 20.5 43.7 11.7L231.4 448H368c35.3 0 64-28.7 64-64h16c17.7 0 32-14.3 32-32v-64h8c13.3 0 24-10.7 24-24v-48c0-13.3-10.7-24-24-24zm147.7-37.4L555.7 16C546.9.7 527.3-4.5 512 4.3L408.6 64H306.4c-12 0-23.7 3.4-33.9 9.7L239 94.6c-9.4 5.8-15 16.1-15 27.1V248c0 22.1 17.9 40 40 40s40-17.9 40-40v-88h184c30.9 0 56 25.1 56 56v28.5l80-46.2c15.3-8.9 20.5-28.4 11.7-43.7z"></path>
            </svg>
            Hire us
          </div>
        </a>

        <div className="social">
          <a
            className="social-link"
            target="_blank"
            href="http://www.linkedin.com/profile/view?id=53364439&authType=NAME_SEARCH&authToken=Tvjd&locale=en_US&srchid=2883080871380224479929&srchindex=1&srchtotal=10&trk=vsrp_people_res_name&trkInfo=VSRPsearchId%3A2883080871380224479929%2CVSRPtargetId%3A53364439%2CVSRPcmpt%3Aprimary"
          >
            <FaLinkedin />
          </a>
          <a
            className="social-link"
            href="https://teams.microsoft.com/l/meetup-join/xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
            target="_blank"
            rel="noopener noreferrer"
          >
            <PiMicrosoftTeamsLogoFill />
          </a>
        </div>

        <a
          className="mail"
          href="mailto:office@microcro.com?subject=Contact&body="
          target="_blank"
          rel="noopener noreferrer"
        >
          office@microcro.com
        </a>
      </div>
      {/* <div id="made-by">
        <small>&copy; 2023 Web Art Forge</small>
      </div> */}
    </footer>
  );
};

export default Footer;
