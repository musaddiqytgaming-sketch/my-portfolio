import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import TechStack from "./components/TechStack";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Cursor from "./components/Cursor";
import Stats from "./components/Stats";
import Timeline from "./components/Timeline";
import { useState, useEffect } from "react";
import Loader from "./components/Loader";
import Aurora from "./components/Aurora";
import Terminal from "./components/Terminal";


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  if (loading) {
    return <Loader />;
  }
  return (
    <>
      <Aurora />
      <Cursor />
      <Navbar />
      <Hero />
      <Stats />
      <About />
      <Terminal />
      <Skills />
      <TechStack />
      <Timeline />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;