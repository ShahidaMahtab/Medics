import React from "react";
import DropDownComponents from "../DropDownComponents/DropDownComponents";
import Form from "../Form/Form";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

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
      <h2 className="mb-6 text-[#0E1C36] font-semibold text-5xl">
        Book Appoinment
      </h2>
      <p className="mb-10 text-gray-700">
        Mollitia dicta commodi est recusandae iste, natus eum asperiores
        corrupti
        <br />
        qui velit . Iste dolorum atque similique praesentium soluta.
      </p>
      <div className="flex gap-x-3 flex-wrap">
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
      <div className="mb-5">
        <label className="block ">
          <textarea
            type="message"
            name="message"
            rows="6"
            className=" w-full   p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-blue-900  focus:ring-blue-900 block rounded-md sm:text-base focus:ring-1"
            placeholder="Message"
          ></textarea>
        </label>
      </div>
      <div>
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
