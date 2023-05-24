import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import ContactLinks from "./components/ContactLinks";

function App() {
  return (
    <div>
      <ContactLinks />
      <Navbar />
      <About />
      <Skills />
      <Contact />
    </div>
  )
}

export default App;
