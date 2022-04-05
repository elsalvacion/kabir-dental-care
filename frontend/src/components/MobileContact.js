import React from "react";
import { GoLocation } from "react-icons/go";
import { BsAlarm } from "react-icons/bs";
import { FaMobileAlt } from "react-icons/fa";
const MobileContact = () => {
  const infos = [
    {
      icon: <GoLocation className="text-pink-500 text-5xl" />,
      header: "Board Bazar",
      subHeader: "Gazipur, Bangladesh",
    },
    {
      icon: <BsAlarm className="text-pink-500 text-5xl" />,
      header: "Opening Hours",
      subHeader: "Mon - Sun: 17:00 - 21:00",
    },
    {
      icon: <FaMobileAlt className="text-pink-500 text-5xl" />,
      header: "+880 1819801320",
      subHeader: "Call us now!",
    },
  ];
  return (
    <div className="bg-white py-10" id="contact">
      <h1 className="text-3xl text-center mb-14" id="services">
        Meet Us
      </h1>
      <div className="flex items-center flex-col  md:flex-row ">
        {infos.map((info) => (
          <div
            className="flex-1 flex flex-col items-center text-center mb-7"
            key={info.header}
          >
            <div className="mb-5">{info.icon}</div>
            <div className="flex-1">
              <h1 className="font-bold md:text-lg">{info.header}</h1>
              <h3>{info.subHeader}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MobileContact;
