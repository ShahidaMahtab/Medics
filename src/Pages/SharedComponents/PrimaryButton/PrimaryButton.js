import React from "react";

const PrimaryButton = ({ text, bgColor, hover }) => {
  return (
    <div>
      <button
        className={`${bgColor} ${hover} text-white py-3 px-8 text-sm font-semibold rounded-full `}
      >
        {text}{" "}
      </button>
    </div>
  );
};

export default PrimaryButton;
