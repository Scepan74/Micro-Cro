import "./App.css";
import Header from "./components/Header";
import Landing from "./components/Landing";
import Services from "./components/Services";
import Footer from "./components/Footer";
import Because from "./components/Because";
import BlueWhale from "./components/BlueWhale";

function App() {
  return (
    <main>
      <div className="hex-bcg"></div>
      <BlueWhale />
      <Header />
      <Landing />
      <Because />
      <Services />
      <Footer />
      <div id="made-by">
        <small>&copy; 2023 Web Art Forge</small>
      </div>
    </main>
  );
}

export default App;
