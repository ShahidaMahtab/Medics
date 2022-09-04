import React from "react";
import { RiCustomerService2Fill } from "react-icons/ri";

import AppointmentForm from "../SharedComponents/AppointmentComponents/AppointmentForm/AppointmentForm";
import BannerComponent from "../SharedComponents/BannerComponent/BannerComponent";
const MakeAppoinment = () => {
  return (
    <section className="mx-auto mb-16">
      {/* banner */}
      <BannerComponent title={"Appoinment"} subtitle={"Book Your Seat"} />
      {/* end of banner */}
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
