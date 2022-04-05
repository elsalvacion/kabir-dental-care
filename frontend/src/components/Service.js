import React from "react";
import Jump from "react-reveal/Jump";

const Service = ({ service }) => {
  return (
    <div className="bg-white w-11/12  rounded-md shadow-md p-4 md:w-80 m-2 hover:bg-blue-200">
      <Jump>
        <div className="p-5 bg-pink-500 rounded-full mx-auto my-4 w-32 h-32">
          <img
            src={service.icon}
            alt={service.header}
            className="w-full h-full object-cover"
          />
        </div>
      </Jump>
      <h1 className="font-semibold text-center text-2xl mb-6">
        {service.header}
      </h1>
      <p className="text-gray-800">{service.subHeader}</p>
    </div>
  );
};

export default Service;
