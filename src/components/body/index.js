import React from "react";
import "./body.css";
import About from "./about/index";
import Education from './education/index';
import Research from './research/index';
import Projects from "./projects/index";
import Skills from "./skills/index";
import Work from "./work/index";
import Curricular from './curricular/index';
import Contact from "./contact/index";
import Footer from "../footer/index";

function Body() {
  return (
    <div className="body">
      <section id="about">
        <About />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="research">
        <Research />
      </section>
      <section id="projects">

        <Projects />
      </section>

      <section id="work">
        <Work />
      </section>
      <section id="curricular">
        <Curricular />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Body;
