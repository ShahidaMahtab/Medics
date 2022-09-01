import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center mt-72">
      <div
        className="animate-bounce inline-block w-8 h-8 border-4 rounded-full bg-black"
        role="status"
      >
        ...
      </div>
      <div
        className="animate-bounce inline-block w-8 h-8 border-4 rounded-full bg-black"
        role="status"
      >
        ...
      </div>
      <div
        className="animate-bounce inline-block w-8 h-8 border-4 rounded-full bg-black"
        role="status"
      >
        ...
      </div>
    </div>
  );
};

export default Loading;
