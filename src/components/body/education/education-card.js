import React from "react";
import "./education-card.css";
// import Aos from "aos";
import "aos/dist/aos.css";

function EducationCard({ item }) {
  return (
    <div className="education-card" data-aos="fade">
      <img src={item.companyLogo} className="education-logo" alt="education" />
      <div className="education-info">
        <label className="edu-name">{item.company}</label>
        <div className="education-dates">
          <label>{item.dateJoining}</label>-<label>{item.dateEnd}</label>
        </div>
        <div className="education-desc">
          <p>{item.designation}</p>
        </div>
        <div className="education-desc">
          <p>{item.education}</p>
        </div>
      </div>
    </div>
  );
}

export default EducationCard;
