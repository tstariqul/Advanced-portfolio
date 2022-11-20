import React from "react";
import "./projects.css";
import ProjectCard from "./project-card";
import { ProjectData } from "../../../data/projects";
import Separator from "../../common/separator/index";

// import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "red" }}
//       onClick={onClick}> NEXT </div>
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <div
//       className={className}
//       style={{ ...style, display: "block", background: "green" }}
//       onClick={onClick}>
//       BACK
//     </div>
//   );
// }

function Projects() {
  // const slider = React.useRef(null)

  // const settings = {
    // dots: false,
    // arrows: false,
    // infinite: true,
    // fade: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // autoplay: false,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />

    // vertical: true,
    //   verticalSwiping: true,
    //   swipeToSlide: true,
    //   beforeChange: function(currentSlide, nextSlide) {
    //     console.log("before change", currentSlide, nextSlide);
    //   },
    //   afterChange: function(currentSlide) {
    //     console.log("after change", currentSlide);
    //   }

  // };

  const data = ProjectData;

  return (
    <div className="projects">
      <Separator />
      <label className="pro-title">Projects - Checkout what I've been doing🎉</label>

      {/* <Slider ref={slider} {...settings}> */}
        {data.map((project) => {
          return <ProjectCard project={project} />;
        })}
      {/* </Slider> */}
      
      {/* <div className="buttonall">
        <button className="button-project1" onClick={() => slider?.current?.slickPrev()}>⏮️ Previous </button>
        <button className="button-project2" onClick={() => slider?.current?.slickNext()}>Next ➡️</button>
        </div> */}
      </div>
  );
}

export default Projects;
