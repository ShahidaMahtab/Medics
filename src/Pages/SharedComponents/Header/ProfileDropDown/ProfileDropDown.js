import React from "react";
import { useState } from "react";
import { signOut } from "firebase/auth";
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BiLogIn } from "react-icons/bi";
import { MdOutlineAccountCircle } from "react-icons/md";

const userMenu = [
  {
    id: 122,
    to: "/login",
    name: "Sign In",
    icon: <BiLogIn className="inline text-xl" />,
  },
  {
    id: 125,
    to: "/register",
    name: "Sign Up",
    icon: <MdOutlineAccountCircle className="inline text-xl" />,
  },
];

const ProfileDropDown = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [user] = useAuthState(auth);
  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleSignOut = () => {
    signOut(auth);
  };

  return (
    <section>
      <div className="flex items-center md:order-2">
        <button
          onClick={handleClick}
          type="button"
          className="flex mr-3 text-sm rounded-full md:mr-0 focus:ring-4  focus:ring-blue-200"
          id="user-menu-button"
          aria-expanded="false"
          data-dropdown-toggle="user-dropdown"
          data-dropdown-placement="bottom"
        >
          <span className="sr-only">Open user menu</span>
          {user?.photoURL ? (
            <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full " />
          ) : (
            <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-medium text-gray-600 dark:text-gray-300">
                {user?.displayName ? user.displayName.slice(0, 1) : <FaUser />}
              </span>
            </div>
          )}
        </button>
        {/* <!-- Dropdown menu --> */}
        {showOptions && (
          <div
            className="z-50 absolute top-16 right-9 mt-2 w-56 origin-bottom-left rounded-md border border-gray-300 bg-[#dbeafe] shadow-sm"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex="-1"
          >
            <div className="py-3 px-4  border-b border-gray-300">
              <span className="block text-sm text-black  ">
                {user?.displayName || "User Name"}
              </span>
              <span className="block text-sm font-medium text-black   ">
                {user?.email || "user@gmail.com"}
              </span>
            </div>
            <ul className="py-1" aria-labelledby="user-menu-button">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="block py-2 px-4 text-base bg-[#dbeafe] hover:bg-blue-400 w-full"
                >
                  sign out
                </button>
              ) : (
                userMenu?.map((menu) => (
                  <Link
                    key={menu.id}
                    className="block py-2 px-4 text-base bg-[#dbeafe] hover:bg-blue-300"
                    to="/login"
                  >
                    {menu.icon} {menu.name}
                  </Link>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProfileDropDown;
