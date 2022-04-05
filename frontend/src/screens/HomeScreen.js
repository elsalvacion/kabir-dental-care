import React from "react";
import Appointment from "../components/Appointment";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HorizontalScrollMenu from "../components/HorizontalScrollMenu";
import MobileContact from "../components/MobileContact";
import MobileNav from "../components/MobileNav";
import Services from "../components/Services";
import Showcase from "../components/Showcase";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials";

const HomeScreen = () => {
  return (
    <div className="h-full">
      <Header />
      <div className="block z-30 sticky top-0 lg:hidden">
        <MobileNav />
      </div>
      <Showcase />
      <div className="block  lg:hidden">
        <MobileContact />
      </div>
      <Services />
      <Team />
      <Appointment />
      <div className="hidden  lg:block">
        <Testimonials />
      </div>
      <div className="block  lg:hidden">
        <HorizontalScrollMenu />
      </div>
      <Footer />
    </div>
  );
};

export default HomeScreen;
