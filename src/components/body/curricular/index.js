import React, {useEffect} from "react";

import CurricularCard from "./curricular-card";
import { CurricularData } from "../../../data/curricular";
import Separator from "../../common/separator/index";
import Aos from "aos";
import "aos/dist/aos.css";



// import Slider from "react-slick";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

function Curricular() {
  useEffect(() => {
    Aos.init({duration: 3000});
}, []);
  // const settings = {
  //   dots: true,
  //   infinite: true,
  //   fade: true,
  //   speed: 250,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   autoplay: true,
    // vertical: true,
    //   verticalSwiping: true,
    //   swipeToSlide: true,
    //   beforeChange: function(currentSlide, nextSlide) {
    //     console.log("before change", currentSlide, nextSlide);
    //   },
    //   afterChange: function(currentSlide) {
    //     console.log("after change", currentSlide);
    //   }
    // <Slider {...settings}>      </Slider>

// };
  const data = CurricularData;
  return (
    <div className="curriculars" data-aos="fade">
      <Separator />
      <label className="accomplish-title">Co-curricular & Accomplish­ments🧾</label>
        {data.map((curricular) => {
          return <CurricularCard curricular={curricular} />;
        })}

    </div>
  );
}

export default Curricular;
