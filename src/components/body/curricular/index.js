import React from "react";
import "./curricular.css";
import CurricularCard from "./curricular-card";
import { CurricularData } from "../../../data/curricular";
import Separator from "../../common/separator/index";


import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Curricular() {
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
  const data = CurricularData;
  return (
    <div className="curriculars">
      <Separator />
      <label className="section-title">Co-curricular & Accomplish­ments🧾</label>
      <Slider {...settings}>
        {data.map((curricular) => {
          return <CurricularCard curricular={curricular} />;
        })}
      </Slider>
    </div>
  );
}

export default Curricular;
