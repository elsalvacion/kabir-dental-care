import React from "react";

const AppointmentRight = () => {
  const steps = [
    {
      step: 1,
      heading: "Easy Booking",
      subHeading:
        "We have the best customer service. Our goal is your happiness, and just filling the form and arrive at leaset 15 minutes before your appointed time.",
    },
    {
      step: 2,
      heading: "Quality Service",
      subHeading:
        "Our doctors are well qualified  and most importantly they are the best there is for the job. We also have the standard equipments to make you say aahh.",
    },
    {
      step: 3,
      heading: "Best Price Guarantee",
      subHeading:
        "We offer the most affordable prices for our customers. And the best part is we allow installments for some dental procedures.",
    },
  ];
  return (
    <div className="flex-1 py-20 px-16">
      <h2 className="text-4xl mb-7">We the best</h2>
      {steps.map((step) => (
        <div className="bg-white  flex items-stretch rounded-md ">
          {/* left */}
          <div className="flex flex-col items-center px-12">
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
