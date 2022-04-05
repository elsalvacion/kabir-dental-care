import React, { useEffect, useState } from "react";
import { FaBars, FaTooth } from "react-icons/fa";
import { Link } from "react-router-dom";
import SideNav from "./SideNav";

const MobileNav = () => {
  useEffect(() => {
    window.addEventListener("scroll", () =>
      window.scrollY > 80 ? setScroll(true) : setScroll(false)
    );
  }, []);
  const [scroll, setScroll] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`flex justify-between items-center ${
        scroll ? "bg-pink-500/90" : "bg-white"
      } p-3 `}
    >
      {open && <SideNav close={() => setOpen(!open)} />}
      <Link to="/" className="flex items-center">
        <div
          className={`p-4 rounded-full  ${
            scroll ? "bg-white" : "bg-pink-500 hover:bg-pink-700 "
          }`}
        >
          <FaTooth
            className={` ${scroll ? "text-pink-500" : "text-gray-100"}`}
            fontSize={20}
          />
        </div>
        <h2
          className={`ml-3 text-2xl font-semibold ${
            scroll ? "text-white" : "text-pink-500 "
          } hover:text-pink-700`}
        >
          KDC
        </h2>
      </Link>
      <button onClick={() => setOpen(!open)}>
        <FaBars
          className={`cursor-pointer ${
            scroll ? "text-white" : "text-pink-500 "
          }`}
          fontSize={28}
        />
      </button>
    </div>
  );
};

export default MobileNav;
