import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";

import makeAppointment from "../../Images/makeAppointment.jpg";
import AppointmentForm from "../SharedComponents/AppointmentComponents/AppointmentForm/AppointmentForm";
const MakeAppoinment = () => {
  return (
    <section className="mx-auto mb-16">
      <div className="mb-16 w-full h-96 bg-gradient-to-r from-[#051738]  to-[#28354e]   relative text-center flex items-center justify-center opacity-95">
        <img
          src={makeAppointment}
          alt=""
          className="w-full h-full object-cover absolute mix-blend-overlay "
        />
        <div>
          <p className="text-white text-2xl mb-2">Book Your Seat</p>

          <h2 className="block text-white text-4xl font-semibold uppercase">
            Appoinment
          </h2>
        </div>
      </div>
      <div className="flex justify-center  flex-wrap">
        {/* text and icons   */}
        <article className="space-y-5">
          <p>
            <RiCustomerService2Fill className="text-5xl text-[#0E1C36] " />
          </p>
          <p className="text-gray-800 text-2xl font-semibold">
            Call For An Emergency Service
          </p>
          <p className="text-4xl font-semibold text-[#0E1C36]  ">
            +84 789 1256
          </p>
        </article>
        {/* Appointment Form section */}
        <article>
          <AppointmentForm />
        </article>
      </div>
    </section>
  );
};

export default MakeAppoinment;
