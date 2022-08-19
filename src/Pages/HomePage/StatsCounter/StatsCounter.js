import React from "react";
import CountUp from "react-countup";

const StatsCounter = (props) => {
  const { title, stat, character, icon } = props.counter;
  return (
    <div>
      <div className="mx-auto text-center ">
        <div className="text-7xl text-center text-gray-800  relative flex justify-center">
          {icon}
          <h3 className="text-8xl font-semibold text-white absolute bottom-[-50px]">
            <CountUp end={stat} duration={3} />
            <span className="text-lg font-light text-gray-500">
              {character}
            </span>
          </h3>
        </div>
        <p className="text-gray-500 mt-14">{title}</p>
      </div>
    </div>
  );
};

export default StatsCounter;
