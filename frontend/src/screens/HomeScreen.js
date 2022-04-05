import React from "react";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";
import Header from "../components/Header";
import NavInfo from "../components/NavInfo";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const HomeScreen = () => {
  return (
    <div className="h-full">
      <Header />
      <Showcase />
      <Services />
      <Team />
      <Appointment />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomeScreen;
