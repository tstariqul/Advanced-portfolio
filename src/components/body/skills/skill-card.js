import React from "react";
import "./skill-card.css";
import Aos from "aos";
import "aos/dist/aos.css";

function SkillCard({ skill }) {
  return (
    <div className="skill-card" data-aos="zoom-out">
      <div className="skill-icon">{skill.icon}</div>
      <label className="skill-name">{skill.name}</label>
    </div>
  );
}

export default SkillCard;
