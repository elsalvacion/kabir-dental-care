import React from "react";
import NavInfo from "./NavInfo";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div className="hidden md:block" id="nav">
      <NavLinks />
      <NavInfo />
    </div>
  );
};

export default Header;
