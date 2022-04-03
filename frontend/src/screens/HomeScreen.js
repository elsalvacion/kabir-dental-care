import React from "react";
import Appointment from "../components/Appointment";
import Header from "../components/Header";
import Services from "../components/Services";
import Showcase from "../components/Showcase";

const HomeScreen = () => {
  return (
    <div className="h-full">
      <Header />
      <Showcase />
      <Services />
      <Appointment />
    </div>
  );
};

export default HomeScreen;
