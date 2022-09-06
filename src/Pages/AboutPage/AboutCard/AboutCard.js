import React from "react";

const AboutCard = (props) => {
  const { img, aboutTitle, desc } = props.service;
  return (
    <div className="mx-auto">
      <div className="">
        <img src={img} alt="" className="w-[255px] h-[170px]" />
      </div>
      <div>
        <h2 className="text-xl text-[#0E1C36] font-semibold my-3">
          {aboutTitle}
        </h2>
        <p className="text-lg text-gray-600 ">{desc}</p>
      </div>
    </div>
  );
};

export default AboutCard;
