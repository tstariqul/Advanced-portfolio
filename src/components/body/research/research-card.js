import React from "react";
import "./research-card.css";
function ResearchCard({ research }) {
  return (
    <div className="research-card">
      <div className="research-info">
        <label className="research-title">{research.title}</label>
        <div className="research-links">
          {research.demo && (
            <a className="research-link" href={research.demo}>
              <div className="link-button">
                <i class="fi-rr-globe"></i>
                Demo
              </div>
            </a>
          )}
          {research.github && (
            <a className="research-link" href={research.github}>
              <div className="link-button">
                <i class="devicon-github-original colored"></i> GitHub
              </div>
            </a>
          )}
        </div>
        <p className="research-about">{research.about}</p>
        <div className="research-tags">
          {research.tags.map((tag) => {
            return <label className="tag">{tag}</label>;
          })}
        </div>
      </div>
      <img src={research.image} className="research-photo" alt="research"/>
    </div>
  );
}

export default ResearchCard;
