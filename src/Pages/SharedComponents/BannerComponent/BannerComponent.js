import React from "react";
import makeAppointment from "../../../Images/makeAppointment.jpg";
const BannerComponent = ({ title, subtitle }) => {
  return (
    <div className="mb-16 w-full h-96 bg-gradient-to-r from-[#051738]  to-[#051738]   relative text-center flex items-center justify-center opacity-90">
      <img
        src={makeAppointment}
        alt=""
        className="w-full h-full object-cover absolute mix-blend-overlay "
      />
      <div>
        <p className="text-gray-200 text-lg mb-2 opacity-95 font-light">
          {subtitle}
        </p>

        <h2 className="block text-white text-5xl font-semibold uppercase opacity-95">
          {title}
        </h2>
      </div>
    </div>
  );
};

export default BannerComponent;
