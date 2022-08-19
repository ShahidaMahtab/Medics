import React from "react";

const Schedule = (props) => {
  const { title, icon, time, desc, dates, btn } = props.schedule;

  return (
    <div className="flex justify-center h-80 p-4 box-border mb-8">
      <div className="block p-6 rounded-lg shadow-lg bg-[#DBEAFE] ">
        <div className="text-5xl mb-3 text-[#0E1C36]">{icon}</div>
        <p className="text-lg text-gray-600 text">{time}</p>
        <h5 className=" mb-2 text-xl  text-[#0E1C36] font-semibold">{title}</h5>
        <div className=" text-base mb-4 w-80">
          {desc
            ? desc
            : dates.map((date) => <p className="text-gray-700 ">{date} </p>)}
        </div>
        {btn}
      </div>
    </div>
  );
};

export default Schedule;
