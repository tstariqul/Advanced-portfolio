import React from "react";
import { EducationData } from "../../../data/education";
import EducationCard from "./education-card";
import "./education.css";
import Separator from "../../common/separator/index";

function Education() {
  const data = EducationData;
  return (
    <div className="education">
      <Separator />
      <label className="section-title">Education🎓 - University, College, School</label>
      <div className="education-list">
        {data.map((item) => {
          return <EducationCard item={item} />;
        })}
      </div>
    </div>
  );
}

export default Education;
