import React from "react";
import img from "../../../Images/appoinment.jpg";
import AppointmentForm from "../../SharedComponents/AppointmentForm/AppointmentForm";
import { BsFillTelephoneFill } from "react-icons/bs";
const BookAppointment = () => {
  return (
    <div className="mx-auto mt-28 mb-40">
      <div className="flex justify-center gap-x-8   flex-wrap items-center">
        <div className=" relative">
          <img src={img} alt="" />
          <div className="">
            <div className="py-12 pl-12 bg-[#0E1C36] flex justify-center items-center gap-5 md:absolute md:left-3 md:bottom-5 ">
              <p className=" border-4 border-gray-600 rounded-full  p-2">
                <BsFillTelephoneFill className=" text-2xl text-gray-600 " />
              </p>
              <p className="w-[416px] h-[60px] text-5xl text-gray-300 font-semibold ">
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
