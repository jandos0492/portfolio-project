import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ContactLinks from "./components/ContactLinks";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <ContactLinks />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App;
