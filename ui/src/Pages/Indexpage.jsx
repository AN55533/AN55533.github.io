// import React from 'react'
import React, { useRef } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import About from "../components/About";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Profile from "../components/Profile";
import Footer from "../components/Footer";

const Indexpage = () => {
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const educationRef = useRef(null);
  const profileRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="App">
        <Navbar
          scrollToSection={scrollToSection}
          refs={{
            aboutRef,
            skillsRef,
            educationRef,
            projectsRef,
            profileRef,
            contactRef,
          }}
        />
        <Header />
        <section ref={aboutRef}>
          <About />
        </section>
        <section ref={educationRef}>
          <Education />
        </section>
        <section ref={skillsRef}>
          <Skills />
        </section>
        <section ref={projectsRef}>
          <Projects />
        </section>
        <section ref={profileRef}>
          <Profile />
        </section>
        <section ref={contactRef}>
          <Footer />
        </section>
      </div>
    </>
  );
};

export default Indexpage;
