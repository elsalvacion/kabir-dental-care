import React from "react";
import { FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";
const NavLinks = () => {
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Pricing",
      path: "/pricing",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div className="bg-white flex justify-between items-center py-4 px-10">
      {/* logo */}
      <Link to="/" className="flex items-center">
        <div className="p-4 rounded-full bg-pink-500 hover:bg-pink-700">
          <FaTooth className="text-gray-100" fontSize={28} />
        </div>
        <h2 className="ml-3 text-3xl font-semibold text-pink-500 hover:text-pink-700">
          KDC
        </h2>
      </Link>
      <div className="flex items-center">
        {links.map((link) => (
          <Link
            className="mx-2 py-2 px-5 bg-pink-500 text-gray-100 rounded hover:bg-pink-700"
            key={link.title}
            to={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NavLinks;
