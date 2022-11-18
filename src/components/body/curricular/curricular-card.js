import React from "react";
import "./curricular-card.css";
function CurricularCard({ curricular }) {
  return (
    <div className="curricular-card">
      <div className="curricular-info">
      <p>{curricular.about}</p>
        <label className="curricular-title">{curricular.title}</label>
        <div className="curricular-links">
          {curricular.demo && (
            <a className="curricular-link" href={curricular.demo}>
              <div className="link-button">
                <i class="fi-rr-certificate"></i>
                Certificate
              </div>
            </a>
          )}
        </div>
 
      </div>
    </div>
  );
}

export default CurricularCard;
