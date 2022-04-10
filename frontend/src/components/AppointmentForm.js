import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookAppointment } from "../actions/appointmentAction";
import Loading from "./Loading";
const AppointmentForm = () => {
  const dispatch = useDispatch();
  const { loading, success, error } = useSelector(
    (state) => state.bookAppointment
  );
  const [values, setValues] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) =>
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAppointment(values));
  };
  return (
    <div
      className="flex-1 bg-pink-400 p-4
     lg:pl-24 py-20 text-gray-50"
    >
      {loading && <Loading text="Booking appointment" />}
      {error && <h2 className="uppercase my-3 text-white">* {error} </h2>}
      <h2 className="uppercase mb-12 text-3xl m-2">Make An Appointment</h2>
      <form onSubmit={handleSubmit}>
        {/* full name */}
        <div className="p-2">
          <label className="block" htmlFor="fullName">
            YOUR FULL NAME
          </label>
          <input
            onChange={handleChange}
            className="block text-gray-700 p-2 rounded mt-2 focus:outline-gray-50 w-full"
            type="text"
            id="fullName"
            placeholder="Your Full Name"
            required
            name="name"
          />
        </div>

        {/*  date & time */}
        <div className="flex flex-col lg:flex-row lg:mb-4">
          {/* APPOINTMENT DATE */}
          <div className="flex-1 p-2">
            <label className="block" htmlFor="appointment">
              APPOINTMENT DATE
            </label>
            <input
              onChange={handleChange}
              className="block text-gray-700 p-2 rounded mt-2 focus:outline-gray-50 w-full"
              type="date"
              id="appointment"
              placeholder="Appointment Date"
              required
              name="date"
            />
          </div>

          {/* APPOINTMENT TIME */}
          <div className="flex-1 p-2">
            <label className="block" htmlFor="appointmentTime">
              APPOINTMENT TIME
            </label>
            <input
              onChange={handleChange}
              className="block text-gray-700 p-2 rounded mt-2 focus:outline-gray-50 w-full"
              type="time"
              id="appointmentTime"
              placeholder="Appointment Time"
              required
              name="time"
            />
          </div>
        </div>

        {/* phone number */}
        <div className="p-2">
          <label className="block" htmlFor="phoneNumber">
            PHONE NUMBER
          </label>
          <input
            onChange={handleChange}
            className="block p-2 text-gray-700 rounded mt-2 focus:outline-gray-50 w-full"
            type="tel"
            id="phoneNumber"
            placeholder="Your Phone Number"
            required
            name="phone"
          />
        </div>

        {/* messages */}
        <div className="p-2">
          <label className="block" htmlFor="message">
            YOUR PROBLEM
          </label>
          <textarea
            onChange={handleChange}
            className="block p-2 text-gray-700 rounded mt-2 focus:outline-gray-50 w-full min-h-32 max-h-32"
            type="tel"
            id="message"
            placeholder="Your Problem"
            required
            name="message"
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
