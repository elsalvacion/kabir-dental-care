import React from "react";
import { steps } from "../constants/general";

const AppointmentRight = () => {
  return (
    <div className="flex-1 px-5 py-20 lg:px-16 " id="pricing">
      <h2 className="text-4xl mb-7">We the best</h2>
      {steps.map((step) => (
        <div
          key={step.step}
          className="bg-white  flex items-stretch rounded-md "
        >
          {/* left */}
          <div className="flex flex-col items-center px-4 lg:px-12">
            <div className="w-1 h-full bg-pink-500"></div>
            <div className="rounded-full p-4 w-12 h-12 text-xl font-semibold bg-pink-500 text-white flex justify-center items-center">
              <p className="text-center">{step.step}</p>
            </div>
            <div className="w-1 h-full bg-pink-500"></div>
          </div>

          {/* right */}
          <div className="flex-1 p-4">
            <h3 className="mb-4 text-3xl">{step.heading}</h3>
            <p className="text-gray-600">{step.subHeading}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppointmentRight;
