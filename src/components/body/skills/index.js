import React, {useEffect} from "react";
import "./skills.css";
import { SkillsData } from "../../../data/skills";
import SkillCard from "./skill-card";
import Separator from "../../common/separator";
import Aos from "aos";
import "aos/dist/aos.css";

function Skills() {
  const data = SkillsData;
  useEffect(() => {
    Aos.init({duration: 3000});
  }, []);
  return (
    <div className="skills">
      <Separator />
      <label className="kill-title" data-aos="zoom-in">Professional Skills🛠️</label>
      <div className="skilltext">
      <p><b>Frontend: </b>I like to code things from scratch, and enjoy bringing ideas to life in the browser. 
      I value simple content structure, clean design patterns, and thoughtful interactions. I genuinely care about people, and love helping fellow designers work on their craft.
      Deep knowledge about OOP in JavaScript, ES6, ES7 and ReacJS . Also work in HTML, CSS, Sass, 
      Other tools like Git, Github, UX, UI, Figma</p>
      <p><b>Backend: </b>Server create by NodeJs </p>
      </div>
      <div className="skills-container">
        {data.map((item, seeeducation) => {
          return (
            <div className="skills-section" key={seeeducation}>
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list">
                {item.list.map((skill, seeskill) => {
                  return (
                  <div key={seeskill}>
                    <SkillCard skill={skill} />;
                  </div>
                  )
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
