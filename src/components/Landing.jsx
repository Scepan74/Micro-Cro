import { useEffect } from "react";
import landing from "../assets/landing.jpg";
import Navbar from "./Navbar";

const Landing = () => {
  useEffect(() => {
    // Remove hash from URL immediately
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname);
    }

    // Scroll to top after browser auto-scroll and layout
    const id = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <section id="landing">
      <Navbar /> {/* stays inside Landing */}
      <img id="landing-img" src={landing} alt="Landing" />
      <div id="quote">
        <h2>
          “The smaller the operation,
          <br /> the fewer the moving parts”
        </h2>
      </div>
    </section>
  );
};

export default Landing;

// import { useEffect } from "react";
// import landing from "../assets/landing.jpg";
// import Navbar from "./Navbar";

// const Landing = () => {
//   useEffect(() => {
//     // Remove hash immediately to prevent auto-scroll
//     if (window.location.hash) {
//       history.replaceState(null, "", window.location.pathname);
//     }
//     // Scroll to top after browser auto-scroll
//     requestAnimationFrame(() => {
//       window.scrollTo(0, 0);
//     });
//   }, []);
//   return (
//     <>
//       <section id="landing">
//         <Navbar />
//         <img id="landing-img" src={landing} alt="" />
//         <div id="quote">
//           <h3>
//             “The smaller the operation,
//             <br /> the fewer the moving parts”
//           </h3>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Landing;
