import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../Images/icons8-caduceus-medical-100.png";
const navigation = [
  { id: "/home", name: "Home" },
  { id: "/about", name: "About" },
  { id: "/services", name: "Services" },
  { id: "/department", name: "Department" },
  { id: "/doctor", name: "Doctor" },
  { id: "/blog", name: "Blog" },
  { id: "/contact", name: "contact" },
];

const Navbar = () => {
  // bg-[#0E1C36]
  return (
    <section className="container my-4  mx-auto">
      {/* logo and title */}
      <div className=" flex  items-center">
        <div className="flex items-center">
          <img src={logo} alt="" className="ml-20 h-14 w-14" />
          <h2 className="text-3xl font-bold">Medics</h2>
        </div>
        {/* links */}
        <div className="mx-auto font-semibold text-lg ">
          {navigation.map((nav) => (
            <Link key={nav.id} to={nav.id} className="text-black ml-8">
              {nav.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Navbar;
