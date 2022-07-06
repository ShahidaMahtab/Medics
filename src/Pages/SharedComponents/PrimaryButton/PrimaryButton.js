import React from "react";
import { BsChevronRight } from "react-icons/bs";
const PrimaryButton = (props) => {
  const { text, bgColor, hover } = props;
  return (
    <div>
      <button
        className={`${bgColor} ${hover} text-white px-7 py-4 text-sm font-semibold rounded-full`}
      >
        {text}{" "}
      </button>
    </div>
  );
};

export default PrimaryButton;
