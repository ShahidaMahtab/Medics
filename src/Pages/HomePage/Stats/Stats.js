import React from "react";
import { FaUserTie } from "react-icons/fa";
import { BsAwardFill, BsFlagFill } from "react-icons/bs";
import { TbWorld } from "react-icons/tb";
import StatsCounter from "../StatsCounter/StatsCounter";
const Stats = () => {
  const counters = [
    {
      id: 201,
      title: "Happy People",
      stat: 58,
      character: "K",
      icon: <FaUserTie />,
    },
    {
      id: 202,
      title: "Surgery Completed",
      stat: 700,
      character: "+",
      icon: <BsFlagFill />,
    },
    {
      id: 203,
      title: "Expert Doctors",
      stat: 40,
      character: "+",
      icon: <BsAwardFill />,
    },
    {
      id: 204,
      title: "Worldwide Branch",
      stat: 28,
      character: "",
      icon: <TbWorld />,
    },
  ];
  return (
    <div className="mx-auto px-20 mb-12">
      <div className="bg-[#0E1C36]  flex gap-20 justify-center pt-5 pb-12 flex-wrap px-5 md:px-0">
        {counters.map((counter) => (
          <StatsCounter key={counter.id} counter={counter}></StatsCounter>
        ))}
      </div>
    </div>
  );
};

export default Stats;
