import React from "react";
import { ImLab } from "react-icons/im";
import { RiHeartPulseFill } from "react-icons/ri";
import { FaTooth, FaBrain, FaDna } from "react-icons/fa";
import { TbCrutches } from "react-icons/tb";
import PatientFeatureItems from "../PatientFeatureItems/PatientFeatureItems";
const PatientCareFeature = () => {
  const features = [
    {
      id: 141,
      title: "Laboratory Services",
      desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
      icon: <ImLab />,
    },
    {
      id: 142,
      title: "Heart Disease",
      desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
      icon: <RiHeartPulseFill />,
    },
    {
      id: 143,
      title: "Dental Care",
      desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
      icon: <FaTooth />,
    },
    {
      id: 144,
      title: "Body Surgery",
      desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
      icon: <TbCrutches />,
    },
    {
      id: 145,
      title: "Neurology Surgery",
      desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
      icon: <FaBrain />,
    },
    {
      id: 146,
      title: "Gynecology",
      desc: "Saepe nulla praesentium eaque omnis perferendis a doloremque.",
      icon: <FaDna />,
    },
  ];
  return (
    <div className="container mx-auto py-12 text-center">
      <h2 className="text-5xl text-[#0E1C36] font-semibold mb-5">
        Award winning patient care
      </h2>
      <div className="border-t-[5px] w-[50px]  border-pink-700 mx-auto mb-5"></div>
      <p className="mb-14 text-gray-600">
        Lets know moreel necessitatibus dolor asperiores illum possimus sint
        voluptates incidunt <br /> molestias nostrum laudantium. Maiores porro
        cumque quaerat.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 justify-center gap-y-10 pl-20">
        {features.map((feature) => (
          <PatientFeatureItems key={feature.id} feature={feature} />
        ))}
      </div>
    </div>
  );
};

export default PatientCareFeature;
