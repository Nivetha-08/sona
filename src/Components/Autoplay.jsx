import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function AutoPlay() {
  
  return (
    <>
      <div className="pt-3">
        <marquee direction="left" scrollamount="5"><span className="badge badge-pill bg-danger">new</span><span className="text-success">  4th Annual Day Celebration 2025  </span>
                                                  <span className="badge badge-pill bg-danger">new</span><span className="text-success">  International Day 2025  </span>
                                                  <span className="badge badge-pill bg-danger">new</span><span className="text-success">  The textile to chettiar Industrialist C. Valliappa  </span>
                                                  <span className="badge badge-pill bg-danger">new</span><span className="text-success">  Sona Accademy: Building the Future of Cricket  </span> 
        </marquee>
      
      </div>
    </>

  );
}

export default AutoPlay;
