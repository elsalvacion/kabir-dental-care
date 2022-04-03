import React from "react";
import { GoLocation } from "react-icons/go";
import { BsAlarm } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
const NavInfo = () => {
  const infos = [
    {
      icon: <GoLocation fontSize={45} className="text-pink-500" />,
      header: "Board Bazar",
      subHeader: "Gazipur, Bangladesh",
    },
    {
      icon: <BsAlarm fontSize={45} className="text-pink-500" />,
      header: "Opening Hours",
      subHeader: "Mon - Sun: 17:00 - 21:00",
    },
    {
      icon: <FaMobileAlt fontSize={45} className="text-pink-500" />,
      header: "+880 1819801320",
      subHeader: "Call us now!",
    },
  ];
  return (
    <div className="flex items-center py-7 px-10">
      {infos.map((info) => (
        <div className="flex-1 flex" key={info.header}>
          <div className="mr-5">{info.icon}</div>
          <div className="flex-1">
            <h1 className="font-bold text-lg">{info.header}</h1>
            <h3>{info.subHeader}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NavInfo;
