import React from "react";

const PatientFeatureItems = (props) => {
  const { icon, title, desc } = props.feature;
  return (
    <div className="mx-auto ">
      <div className="flex gap-2 items-center">
        <div className="text-pink-700 text-6xl">{icon}</div>

        <h3 className="text-2xl font-semibold ">{title}</h3>
      </div>
      <div className="text-left">
        <p className="w-[350px] text-base text-gray-600 mt-4">{desc}</p>
      </div>
    </div>
  );
};

export default PatientFeatureItems;
