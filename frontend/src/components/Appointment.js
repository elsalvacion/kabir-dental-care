import React from "react";
import AppointmentForm from "./AppointmentForm";
import AppointmentRight from "./AppointmentRight";

const Appointment = () => {
  return (
    <div className="flex flex-col lg:flex-row" id="appointment">
      {/* left */}
      <AppointmentForm />
      {/* right */}
      <AppointmentRight />
    </div>
  );
};

export default Appointment;
