import React from "react";

const Service = ({ service }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4 w-80 m-2 hover:bg-blue-200">
      <div className="p-5 bg-pink-500 rounded-full mx-auto my-4 w-32 h-32">
        <img
          src={service.icon}
          alt={service.header}
          className="w-full h-full object-cover"
        />
      </div>
      <h1 className="font-semibold text-center text-2xl mb-6">
        {service.header}
      </h1>
      <p className="text-gray-800">{service.subHeader}</p>
    </div>
  );
};

export default Service;
