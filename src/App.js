import About from "./components/About";
import Contact from "./components/Contact";
import Copyright from "./components/Copyright";
import Downloads from "./components/Downloads";
import Features from "./components/Features";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Releases from "./components/Releases";
import StatsBar from "./components/StatsBar";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <StatsBar />
      <Features />
      <Releases />
      <Downloads />
      <Contact />
      <Copyright />
    </>
  );
}

export default App;
