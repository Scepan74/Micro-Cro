import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Because from "./components/Because";
import BlueWhale from "./components/BlueWhale";
import About from "./components/About";
import Areas from "./components/Areas";

if ("scrollRestoration" in window.history) {
  window.history.scrollRestoration = "manual"; // disable automatic scroll restoration
}
function App() {
  useEffect(() => {
    if (window.location.hash) {
      history.replaceState(
        null,
        null,
        window.location.pathname + window.location.search
      );
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <main>
        <div className="hex-bcg"></div>
        <BlueWhale />
        <Header />
        <Landing />
        <About />
        <Because />
        <Areas />
        <Services />
        <Footer />

        <div id="made-by">
          <small>&copy; 2023 Web Art Forge</small>
        </div>
      </main>
    </>
  );
}

export default App;

// function App() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//     if (window.location.hash) {
//       history.replaceState(null, "", window.location.pathname);
//     }
//     requestAnimationFrame(() => {
//       window.scrollTo(0, 0);
//     });
//   }, []);
//   return (
//     <main>
//       <div className="hex-bcg"></div>
//       <BlueWhale />
//       <Header />
//       <Landing />
//       <About />
//       <Because />
//       <Areas />
//       <Services />
//       <Footer />

//       <div id="made-by">
//         <small>&copy; 2023 Web Art Forge</small>
//       </div>
//     </main>
//   );
// }

// export default App;
