import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineCloseSquare } from "react-icons/ai";
import { FaMedrt } from "react-icons/fa";
import { ToggleContext } from "../../../App";
import CustomLink from "../../HomePage/CustomLink/CustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";
const navigation = [
  { id: 1, to: "/home", name: "Home" },
  { id: 2, to: "/about", name: "About" },
  { id: 3, to: "/services", name: "Services" },
  { id: 4, to: "/department", name: "Department" },
  { id: 5, to: "/doctor", name: "Doctor" },
  { id: 6, to: "/blog", name: "Blog" },
  { id: 7, to: "/contact", name: "contact" },
];

const Navbar = () => {
  // bg-[#0E1C36]
  const [open, setOpen] = useContext(ToggleContext);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <>
      <section className="shadow ">
        {/* logo and title */}
        <div className=" md:flex items-center justify-between py-4 md:px-10 px-7">
          <div className="flex justify-between">
            <div className="flex items-center">
              <FaMedrt className="w-7 h-7 text-pink-700 ml-5" />
              <h2 className="text-3xl font-bold ml-3">Medics</h2>
            </div>
            {/* menu bar*/}
            <div onClick={() => setOpen(!open)} className="md:hidden">
              {open ? (
                <AiOutlineCloseSquare className="w-7 h-7" />
              ) : (
                <AiOutlineMenu className="w-7 h-7" />
              )}
            </div>
          </div>
          {/* links */}

          <ul
            className={`md:flex justify-center mt-10 md:mt-0 absolute md:relative ease-out   md:transition-none w-full ${
              open
                ? "top-14 md:top-0 duration-500 "
                : "right-[700px]  md:right-0 duration-75"
            }`}
          >
            {navigation.map((nav) => (
              <li
                key={nav.id}
                className="text-xl ml-14 md:ml-4 mb-4  md:mb-0  hover:underline hover:underline-offset-8 hover:decoration-2"
              >
                <CustomLink
                  to={nav.to}
                  className="text-black hover:text-pink-700 duration-500 "
                >
                  {nav.name}
                </CustomLink>
              </li>
            ))}
            <li className="text-xl ml-14 md:ml-4 mb-4  md:mb-0  hover:underline hover:underline-offset-8 hover:decoration-2">
              {user ? (
                <div className="flex gap-3 ">
                  <button onClick={handleSignOut}>sign out</button>
                  <p>{user.displayName}</p>
                </div>
              ) : (
                <Link
                  className="text-black hover:text-pink-700 duration-500 "
                  to="/login"
                >
                  Sign In
                </Link>
              )}
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Navbar;
