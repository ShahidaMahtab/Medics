import React from "react";
import PrimaryButton from "../../PrimaryButton/PrimaryButton";
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
    { inputType: "time", inputPlaceholder: "Time" },
    { inputType: "text", inputPlaceholder: "Full Name" },
    { inputType: "number", inputPlaceholder: "Phone Number" },
  ];
  return (
    <div className="mx-auto text-center md:text-left">
      <h2 className="mt-12  md:mt-0 mb-6 text-[#0E1C36] font-semibold text-5xl ml-12">
        Book Appoinment
      </h2>
      <p className="ml-12 mb-10 text-gray-700">
        Mollitia dicta commodi est recusandae iste, natus eum asperiores
        corrupti
        <br />
        qui velit . Iste dolorum atque similique praesentium soluta.
      </p>

      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4">
          <div>
            <DropDownComponents title={"choose Department"} options={options} />
          </div>
          <div>
            <DropDownComponents title={"Select Doctors"} options={options} />
          </div>
          {inputs.map((input) => (
            <Form key={input.inputType} input={input}></Form>
          ))}
        </div>
      </div>
      <div className="mb-5 mt-6 flex justify-center">
        <label className="block ">
          <textarea
            type="message"
            name="message"
            rows="6"
            cols="54"
            className="  p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-900  focus:ring-blue-900 block rounded-md sm:text-base focus:ring-1"
            placeholder="Message"
          ></textarea>
        </label>
      </div>
      <div className="ml-12">
        <PrimaryButton
          text={"Make Appoinment"}
          bgColor={"bg-[#0E1C36]"}
          hover={"hover:bg-pink-700"}
        />
      </div>
    </div>
  );
};

export default AppointmentForm;
