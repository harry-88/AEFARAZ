import React from "react";
import Slider from "react-slick";

export default function MainSlider() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 200,
    pauseOnHover: true,
    
  };

  const images = [
    {
      src: "/images/ADVOCATE OFFICE (1).png",
      text: "Slide 1 text goes here",
    },
    {
      src: "/images/ADVOCATE OFFICE (2).png",
      text: "Slide 2 text goes here",
    },
    {
      src: "/images/ADVOCATE OFFICE (3).png",
      text: "Slide 3 text goes here",
    },
  ];


  return (
    <div>
      {/* <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="slider-img" src={image.src} alt={`Slide ${index + 1}`} />
            <div className="carousel-caption ">
              <h5 className="my-5 py-5">{image.text}</h5>
            </div>
          </div>
        ))}
      </Slider> */}
    </div>
  );
}
