import React from "react";
import "./education-card.css";

function EducationCard({ item }) {
  return (
    <div className="education-card">
      <img src={item.companyLogo} className="education-logo" />
      <div className="education-info">
        <label className="company-name">{item.company}</label>
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
