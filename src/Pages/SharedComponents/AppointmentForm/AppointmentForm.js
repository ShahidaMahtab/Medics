import React from "react";
import DropDownComponents from "../DropDownComponents/DropDownComponents";

const AppointmentForm = () => {
  const options = [
    "software Design",
    "Development Cycle",
    "Software Development",
    "Mantainance",
    "process Query",
    "Cost and Duration",
    "Modal Delivery",
  ];

  return (
    <div>
      <h2>Book Appoinment</h2>
      <div className="flex">
        <DropDownComponents title={"choose Department"} options={options} />
        <DropDownComponents title={"Select Doctors"} options={options} />
      </div>
    </div>
  );
};

export default AppointmentForm;
