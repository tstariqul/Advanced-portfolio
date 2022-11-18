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
      <label className="section-title" data-aos="zoom-in">Professional Skills🛠️</label>
      <div className="skills-container">
        {data.map((item) => {
          return (
            <div className="skills-section">
              <label className="skills-section-title">{item.type}</label>
              <div className="skills-list" data-aos="zoom-in">
                {item.list.map((skill) => {
                  return <SkillCard skill={skill} />;
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
