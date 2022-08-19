import React from "react";
import { FaNotesMedical } from "react-icons/fa";
import { ImClock } from "react-icons/im";
import { RiCustomerService2Fill } from "react-icons/ri";
import PrimaryButton from "../../SharedComponents/PrimaryButton/PrimaryButton";
import Schedule from "../Schedule/Schedule";
const Schedules = () => {
  const schedules = [
    {
      id: 311,
      icon: <FaNotesMedical />,
      time: "24 hour Service",
      title: "Online Appointment",
      desc: "Get ALl time support for emergency.We have introduced the principle of family medicine.",
      btn: (
        <PrimaryButton
          text={"MAKE APPOINTMENT"}
          bgColor={"bg-[#0E1C36]"}
          hover={"hover:bg-pink-700"}
        />
      ),
    },
    {
      id: 312,
      icon: <ImClock />,
      time: "Timing schedule",
      title: "Working Hours",
      dates: [
        "Sun - Wed : 8:00 - 17:00",
        "Thu - Fri  : 8:00 - 17:00",
        "Sat - sun :10:00 - 17:00",
      ],
    },
    {
      id: 313,
      icon: <RiCustomerService2Fill />,
      time: "Emegency Cases",
      title: "1-800-700-6200",
      desc: "Get ALl time support for emergency.We have introduced the principle of family medicine.Get Conneted with us for any urgency .",
    },
  ];
  return (
    <div className="mx-auto md:absolute md:bottom-[-360px] ">
      <div className="mx-auto  md:pl-14 ">
        <div className="flex justify-center  gap-1 flex-wrap  mb-8 ">
          {schedules.map((schedule) => (
            <Schedule key={schedule.id} schedule={schedule} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Schedules;
