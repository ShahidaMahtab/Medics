import React from "react";
import DropDownComponents from "../DropDownComponents/DropDownComponents";
import Form from "../Form/Form";

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
  const inputs = [
    { inputType: "date", inputPlaceholder: "" },
    { inputType: "text", inputPlaceholder: "Full Name" },
    { inputType: "time", inputPlaceholder: "Time" },
    { inputType: "number", inputPlaceholder: "Phone Number" },
  ];
  return (
    <div>
      <h2>Book Appoinment</h2>
      <div className="flex gap-x-3">
        <div>
          <DropDownComponents title={"choose Department"} options={options} />
          {inputs.slice(0, 2).map((input) => (
            <Form key={input.inputType} input={input}></Form>
          ))}
        </div>
        <div>
          <DropDownComponents title={"Select Doctors"} options={options} />
          {inputs.slice(2, 4).map((input) => (
            <Form key={input.inputType} input={input}></Form>
          ))}
        </div>
      </div>
      <div>
        <label className="block ">
          <input
            type="text"
            name="message"
            className=" w-full p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            placeholder="Message"
          />
        </label>
      </div>
    </div>
  );
};

export default AppointmentForm;
