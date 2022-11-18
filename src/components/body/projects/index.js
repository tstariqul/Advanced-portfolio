import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";

function Projects() {
  const data = ProjectData;
  return (
    <div>
    <div className="projects">
      <Separator />
      <label className="section-title">Projects - Checkout what I've been doing🎉</label>

      <div>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      </div>
   
    </div>
    </div>
  );
}

export default Projects;
