import React from "react";
import { FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";
import { links } from "../constants/general";
const NavLinks = () => {
  return (
    <div className="bg-white flex flex-col lg:justify-between lg:flex-row items-center p-4 lg:px-10">
      {/* logo */}
      <Link to="/" className="flex items-center mb-4 lg:mb-0">
        <div className="p-4 rounded-full bg-pink-500 hover:bg-pink-700">
          <FaTooth className="text-gray-100" fontSize={28} />
        </div>
        <h2 className="ml-3 text-3xl font-semibold text-pink-500 hover:text-pink-700">
          KDC
        </h2>
      </Link>
      <div className="flex items-center flex-wrap justify-center">
        {links.map((link) => (
          <a
            className="m-2 p-2 md:px-5 bg-pink-500 text-gray-100 rounded hover:bg-pink-700"
            key={link.title}
            href={link.path}
          >
            {link.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
