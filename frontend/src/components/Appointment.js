import React from "react";
import AppointmentForm from "./AppointmentForm";
import AppointmentRight from "./AppointmentRight";

const Appointment = () => {
  return (
    <div className="flex flex-wrap">
      {/* left */}
      <AppointmentForm />
      {/* right */}
      <AppointmentRight />
    </div>
  );
};

export default Appointment;
