import React from "react";
import Slider from "react-slick";
import review1 from "../../../Images/test-thumb1.jpg";
import review2 from "../../../Images/test-thumb2.jpg";
import review3 from "../../../Images/test-thumb3.jpg";
import review4 from "../../../Images/test-thumb4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Review from "../Review/Review";
const reviews = [
  {
    id: 23,
    title: "Good Support!",
    name: "john partho",
    img: review1,
    desc: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
  {
    id: 24,
    title: "Nice Environment",
    name: "john partho",
    img: review2,
    desc: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
  {
    id: 25,
    title: "Modern Service!",
    name: "john partho",
    img: review3,
    desc: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
  {
    id: 26,
    title: "Amazing Service!",
    name: "john partho",
    img: review4,
    desc: "They provide great service facilty consectetur adipisicing elit. Itaque rem, praesentium, iure, ipsum magnam deleniti a vel eos adipisci suscipit fugit placeat.",
  },
];

var settings = {
  dots: true,
  infinite: false,

  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Reviews = () => {
  return (
    <div className="mx-auto container">
      <h2 className="text-5xl text-center text-[#0E1C36] font-semibold mb-5">
        We served over 5000+ Patients
      </h2>
      <div className="border-t-[5px] w-[50px]  border-pink-700 mx-auto mb-5"></div>
      <p className="mb-14 text-gray-600 text-center">
        Lets know moreel necessitatibus dolor asperiores illum possimus sint
        voluptates incidunt <br /> molestias nostrum laudantium. Maiores porro
        cumque quaerat.
      </p>

      <div>
        <Slider {...settings}>
          {reviews.map((review) => (
            <Review key={review._id} review={review} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;
