import React from "react";
import Header from "../components/Header";
import Services from "../components/Services";
import Showcase from "../components/Showcase";

const HomeScreen = () => {
  return (
    <div className="h-full">
      <Header />
      <Showcase />
      <Services />
    </div>
  );
};

export default HomeScreen;
