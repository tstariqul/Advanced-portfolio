import React from "react";
import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div onClick={() => setIsOpen(!isOpen)} className="close-icon">
        <i class="fi-rr-cross-circle"></i>
      </div>
      <div className="mobile-options">
      <div className="mobile-option">
        <a href="#skills">
          <i class="fi-rr-laptop option-icon"></i>Skills
        </a>
      </div>
      <div className="mobile-option">
        <a href="#education">
          <i class="fi-rr-graduation-cap option-icon"></i>Education
        </a>
      </div>
        <div className="mobile-option">
        <a href="#research">
          <i class="fi-rr-search option-icon"></i>Research
        </a>
      </div>

      <div className="mobile-option">
        <a href="#projects">
          <i class="fi-rr-edit-alt option-icon"></i>Projects
        </a>
      </div>
      <div className="mobile-option">
        <a href="#work">
          <i class="fi-rr-briefcase option-icon"></i>Work
        </a>
      </div>
      <div className="mobile-option">
        <a href="#curricular">
          <i class="fi-rr-clip option-icon"></i>Co-curricular
        </a>
      </div>
      <div className="mobile-option">
        <a href="#contact">
          <i class="fi-rr-user option-icon"></i>Contact
        </a>
      </div>
      </div>
    </div>
  );
}

export default Mobile;
