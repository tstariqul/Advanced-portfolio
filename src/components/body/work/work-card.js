import React from "react";
import "./work-card.css";
// import Aos from "aos";
import "aos/dist/aos.css";

function WorkCard({ item }) {
  return (
    <div className="work-card" data-aos="zoom-out">
      <img src={item.companyLogo} className="work-logo" alt="work"/>
      <div className="work-info">
        <label className="company-name">{item.company}</label>
        <div className="work-dates">
          <label>{item.dateJoining}</label> Till <label>{item.dateEnd}</label>
        </div>
        <div className="work-desc">
          <p>{item.work}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkCard;
