import React from "react";
import { Link } from "react-router-dom";

import hero from "../../../Images/slider-bg-1.jpg";
import PrimaryButton from "../../SharedComponents/PrimaryButton/PrimaryButton";
const Hero = (props) => {
  const { open } = props;

  return (
    <section className="container ">
      <div className="hidden md:block  md:h-full md:w-[1500px] md:relative">
        <img src={hero} alt="" />
      </div>
      <div
        className={`md:absolute md:top-40 md:left-44 ${
          open ? "mt-80" : "mt-0"
        }`}
      >
        <div className="border-t-[5px] mr-[450px]  border-pink-700 "></div>
        <h4 className="text-base font-medium text-gray-700 ml-10 md:ml-0">
          TOTAL HEALTH CARE SOLUTION
        </h4>
        <h2 className="text-6xl leading-tight font-bold text-[#0E1C36] ml-10 md:ml-0">
          Your Most Trusted <br />
          Health Partner
        </h2>
        <p className="text-base text-gray-500 leading-9 ml-10 md:ml-0">
          A repudiandae ipsam labore ipsa voluptatu quidem quae laudantium
          quisquam
          <br />
          aperiam maiores sunt fugit, deserunt rem suscipit placeat.
        </p>
        <div className="ml-10 md:ml-0">
          <Link to={"/makeappoinment"}>
            <PrimaryButton
              text={"MAKE APPOINMENT"}
              bgColor={"bg-pink-700"}
              hover={"hover:bg-[#0E1C36]"}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
