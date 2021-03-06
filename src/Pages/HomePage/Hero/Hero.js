import React from "react";
import hero from "../../../Images/slider-bg-1.jpg";
import PrimaryButton from "../../SharedComponents/PrimaryButton/PrimaryButton";
const Hero = () => {
  return (
    <section>
      <div className="relative ">
        <img src={hero} alt="" />
      </div>
      <div className="absolute top-36 left-32 space-y-4">
        <div class="border-t-[5px] mr-[450px]  border-pink-700 ..."></div>
        <h4 className="text-base font-medium text-gray-700 ">
          TOTAL HEALTH CARE SOLUTION
        </h4>
        <h2 className="text-6xl leading-tight font-bold text-[#0E1C36]">
          Your Most Trusted <br />
          Health Partner
        </h2>
        <p className="text-base text-gray-500 leading-9">
          A repudiandae ipsam labore ipsa voluptatu quidem quae laudantium
          quisquam
          <br />
          aperiam maiores sunt fugit, deserunt rem suscipit placeat.
        </p>
        <PrimaryButton
          text={"MAKE APPOINTMENT"}
          bgColor={"bg-pink-700"}
          hover={"hover:bg-[#0E1C36]"}
        />
      </div>
    </section>
  );
};

export default Hero;
