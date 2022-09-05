import React from "react";

const ServiceCard = (props) => {
  const { img, aboutTitle, desc } = props.service;
  return (
    <div className="mx-auto">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h2 className="text-xl text-[#0E1C36] text-semibold">{aboutTitle}</h2>
        <p className="text-lg text-gray-600 w-[350px]">{desc}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
