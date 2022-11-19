import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";

import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Projects() {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 250,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    // vertical: true,
    //   verticalSwiping: true,
    //   swipeToSlide: true,
    //   beforeChange: function(currentSlide, nextSlide) {
    //     console.log("before change", currentSlide, nextSlide);
    //   },
    //   afterChange: function(currentSlide) {
    //     console.log("after change", currentSlide);
    //   }

};

  const data = ProjectData;

  return (
      <div className="projects">
      <Separator />
      <label className="section-title">Projects - Checkout what I've been doing🎉</label>
      <Slider {...settings}>
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
    </Slider>
    </div>
  );
}

export default Projects;
