import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Explore from "./components/Explore";
import Journal from "./components/Journal";
import JournalList from "./components/JournalList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar /> {/* Navbar component */}
      <section id="hero">
        <Hero />
      </section>

      <section id="explore">
        <Explore />
      </section>

      <section id="journal">
        <JournalList />
      </section>

      <section id="journal">
        <Journal />
      </section>

      <section id="contact">
        <Contact />
      </section>

      <Footer />
    </>
  );
}


export default App;
