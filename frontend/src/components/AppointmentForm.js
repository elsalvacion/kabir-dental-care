import React from "react";

const AppointmentForm = () => {
  return (
    <div className="flex-1 bg-pink-400 pl-24 pt-24 text-gray-50">
      <h2 className="uppercase mb-12 text-3xl m-2">Make An Appointment</h2>
      <form>
        {/* full name */}
        <div className="p-2">
          <label className="block" htmlFor="fullName">
            YOUR FULL NAME
          </label>
          <input
            className="block p-2 rounded mt-2 focus:outline-gray-50 w-full"
            type="text"
            id="fullName"
            placeholder="Your Full Name"
          />
        </div>

        {/* phone & date */}
        <div className="flex mb-4">
          {/* APPOINTMENT DATE */}
          <div className="flex-1 p-2">
            <label className="block" htmlFor="appointment">
              APPOINTMENT DATE
            </label>
            <input
              className="block text-gray-700 p-2 rounded mt-2 focus:outline-gray-50 w-full"
              type="date"
              id="appointment"
              placeholder="Appointment Date"
            />
          </div>

          {/* APPOINTMENT DATE */}
          <div className="flex-1 p-2">
            <label className="block" htmlFor="appointmentTime">
              APPOINTMENT TIME
            </label>
            <input
              className="block text-gray-700 p-2 rounded mt-2 focus:outline-gray-50 w-full"
              type="time"
              id="appointmentTime"
              placeholder="Appointment Time"
            />
          </div>
        </div>

        {/* phone number */}
        <div className="p-2">
          <label className="block" htmlFor="phoneNumber">
            PHONE NUMBER
          </label>
          <input
            className="block p-2 text-gray-700 rounded mt-2 focus:outline-gray-50 w-full"
            type="tel"
            id="phoneNumber"
            placeholder="Your Phone Number"
          />
        </div>

        {/* messages */}
        <div className="p-2">
          <label className="block" htmlFor="message">
            MESSAGE
          </label>
          <textarea
            className="block p-2 text-gray-700 rounded mt-2 focus:outline-gray-50 w-full min-h-32 max-h-32"
            type="tel"
            id="message"
            placeholder="Message (optional)"
            maxLength={35}
          ></textarea>
        </div>

        {/* submit */}
        <div className="p-2">
          <button
            type="submit"
            className="py-2 px-5 rounded bg-white text-pink-400 hover:bg-pink-700 hover:text-gray-100"
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default AppointmentForm;
