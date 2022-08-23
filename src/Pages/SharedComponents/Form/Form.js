import React from "react";

const Form = ({ input }) => {
  return (
    <div>
      <div key={input} className="my-5 ">
        <label className="block ">
          <input
            type={input.inputType}
            name={input.inputType}
            className=" w-[229px] h-[55px]   p-3 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block rounded-md sm:text-sm focus:ring-1"
            placeholder={input.inputPlaceholder}
          />
        </label>
      </div>
    </div>
  );
};

export default Form;
