import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const DropDownComponents = (props) => {
  const [showOptions, setShowOptions] = useState(false);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };
  const { title, options } = props;
  return (
    <div>
      <div className="flex items-center justify-center bg-gray-200">
        <div className="relative inline-block text-left">
          <div>
            <button
              onClick={handleClick}
              type="button"
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 focus:ring-offset-gray-100"
              id="menu-button"
              aria-expanded="true"
              aria-haspopup="true"
            >
              {title}
              <svg
                className="-mr-1 ml-2 h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          {showOptions && (
            <div
              className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="menu-button"
              tabindex="-1"
            >
              <div className="py-1" role="none">
                {options.map((op) => (
                  <Link
                    to="/"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    {op}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DropDownComponents;
