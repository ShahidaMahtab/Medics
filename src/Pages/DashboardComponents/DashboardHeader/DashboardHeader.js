import React from "react";
import { BsSearch } from "react-icons/bs";
import { BsMenuButtonWideFill } from "react-icons/bs";
const DashboardHeader = ({ isDrawerOpen, setIsDrawerOpen }) => {
  return (
    <div className="py-4 mb-10 flex justify-between items-center md:sticky top-0">
      {/* hamburger */}
      <button
        className="text-primary text-2xl p-1 border border-primary rounded md:hidden"
        onClick={() => setIsDrawerOpen(!isDrawerOpen)}
      >
        <BsMenuButtonWideFill />
      </button>
      {/* search */}
      <div className="hidden md:flex items-center px-2 border space-x-2 rounded-lg text-gray-500 ">
        <input
          className="py-2 w-full outline-blue-100 focus-within:text-black bg-[#dbeafe] "
          type="text"
          placeholder="Search here"
        />
        <button>
          <BsSearch />
        </button>
      </div>
      <div className="flex items-center space-x-2">
        {/*    <h5 className="font-light text-sm">{user?.displayName}</h5> */}
        {/* <Avatar
          alt={user?.name}
          src={user?.photoURL}
          sx={{ width: 40, height: 40 }}
        /> */}
      </div>
    </div>
  );
};

export default DashboardHeader;
