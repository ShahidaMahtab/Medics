import React from "react";
import { Link } from "react-router-dom";

const ProtectedLink = () => {
  return (
    <li>
      <Link
        to="dashboard"
        className="block py-2 pr-4 pl-3 md:px-0 rounded bg-[#dbeafe] 
                   md:hover:bg-[#dbeafe] text-lg first-letter: md:text-base hover:text-pink-700  md:hover:underline 
                   md:hover:underline-offset-8 hover:decoration-2 hover:bg-blue-200"
        aria-current="page"
      >
        Dashboard
      </Link>
    </li>
  );
};

export default ProtectedLink;
