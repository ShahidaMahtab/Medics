import React from "react";
import img from "../../../Images/appoinment.jpg";
import AppointmentForm from "../../SharedComponents/AppointmentForm/AppointmentForm";
import { BsFillTelephoneFill } from "react-icons/bs";
const BookAppointment = () => {
  return (
    <div className="mx-auto mt-28 mb-40">
      <div className="flex justify-center  gap-24">
        <div className="w-[459px] h-[655px] relative">
          <img src={img} alt="" />
          <div className="">
            <div className="p-10 bg-[#0E1C36] flex justify-center items-center gap-5 absolute bottom-1 left-10 w-[416px]">
              <p className=" border-4 border-gray-600 rounded-full p-2 w">
                <BsFillTelephoneFill className=" text-2xl text-gray-600 -[416px]" />
              </p>
              <p className=" text-5xl text-gray-300 font-semibold ">
                +23 345 67980
              </p>
            </div>
          </div>
        </div>
        <div>
          <AppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
