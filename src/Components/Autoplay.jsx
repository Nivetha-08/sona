import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 4,
    autoplay: true,
    speed: 10000,
    autoplaySpeed: 1000,
    cssEase: "linear"
  };

  return (
    <div className="slider-container pt-2" >
      <Slider {...settings}>
        <div><span className="badge badge-pill bg-danger">new  </span><span className="text-success"> 4th Annual Day Celebration 2025</span></div>
        <div><span className="badge badge-pill bg-danger">new  </span><span className="text-success"> International Day 2025</span></div>
        <div><span className="badge badge-pill bg-danger">new  </span><span className="text-success"> The textile to chettiar Industrialist C. Valliappa</span></div>
        <div><span className="badge badge-pill bg-danger">new  </span><span className="text-success"> Sona Accademy: Building the Future of Cricket</span></div>
      </Slider>
    </div>
  );
}

export default AutoPlay;
