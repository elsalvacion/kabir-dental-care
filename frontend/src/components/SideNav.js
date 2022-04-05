import React from "react";
import { FaTimes } from "react-icons/fa";
import { links } from "../constants/general";

const SideNav = ({ close }) => {
  return (
    <div className="fixed left-0 top-0 right-0 bottom-0 bg-pink-500/60 z-40">
      <div className="relative w-full h-full z-50">
        <div className="absolute top-0 right-0 bottom-0 w-9/12 bg-white">
          <div className="p-2  flex justify-between items-center">
            <button
              onClick={() => close()}
              className="border-2 border-gray-300 p-3 rounded"
            >
              <FaTimes fontSize={22} />
            </button>
            <div></div>
          </div>
          <ul>
            {links.map((link) => (
              <li key={link.title} className="py-2">
                <a
                  className="m-2 p-2 md:px-5  text-pink-500 rounded active:text-pink-700 block"
                  key={link.title}
                  href={link.path}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
