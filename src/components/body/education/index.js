import React, {useEffect} from "react";
import { EducationData } from "../../../data/education";
import EducationCard from "./education-card";
import "./education.css";
import Separator from "../../common/separator/index";
import Aos from "aos";
import "aos/dist/aos.css";

function Education() {
    useEffect(() => {
        Aos.init({duration: 3000});
    }, []);

  const data = EducationData;
  return (
    <div className="education">
      <Separator />
      <div data-aos="fade">
      <label className="edu-title">Education🎓 - University, College, School</label>
      </div>
      <div className="education-list">
        {data.map((item, seeedu) => {
          return (
            <div key={seeedu}>
            <EducationCard item={item}/>;
            </div>
          )
 
        })}
      </div>
    </div>
  );
}

export default Education;
