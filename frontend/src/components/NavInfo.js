import React from "react";
import { GoLocation } from "react-icons/go";
import { BsAlarm } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
const NavInfo = () => {
  const infos = [
    {
      icon: (
        <GoLocation className="text-pink-500 text-3xl md:text-4xl lg:text-6xl" />
      ),
      header: "Board Bazar",
      subHeader: "Gazipur, Bangladesh",
    },
    {
      icon: (
        <BsAlarm className="text-pink-500 text-2xl md:text-4xl lg:text-6xl" />
      ),
      header: "Opening Hours",
      subHeader: "Mon - Sun: 17:00 - 21:00",
    },
    {
      icon: (
        <FaMobileAlt className="text-pink-500 text-3xl md:text-4xl lg:text-6xl" />
      ),
      header: "+880 1819801320",
      subHeader: "Call us now!",
    },
  ];
  return (
    <div
      className="flex items-center flex-col flex-wrap md:flex-row p-3 justify-center m-5 md:p-10"
      id="contact"
    >
      {infos.map((info) => (
        <div
          className="flex-1 flex flex-col items-center md:flex-row text-center md:text-left mb-5 md:mb-0"
          key={info.header}
        >
          <div className="mb-3 md:mr-5">{info.icon}</div>
          <div className="flex-1">
            <h1 className="font-bold md:text-lg">{info.header}</h1>
            <h3>{info.subHeader}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavInfo;
