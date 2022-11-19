import React from "react";
import "./research.css";
import ResearchCard from "./research-card";
import { ResearchData } from "../../../data/research";
import Separator from "../../common/separator/index";


import Slider from "react-slick";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Research() {
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
  const data = ResearchData;
  return (
    <div className="research">
      <Separator />
      <label className="section-title">Research & Publication🔬 - Journals(3) Conferences(10), Papers Under Review(3), Thesis(2), Book(1)</label>
      <><br />
      Research Topics:
        Artificial Intelligence,
        Big Data,
        Cloud Computing,
        Data Science
      </>

      <Slider {...settings}>
        {data.map((research) => {
          return <ResearchCard research={research} />;
        })}
      </Slider>
    </div>
  );
}

export default Research;
