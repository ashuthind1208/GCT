import React from "react";
import HeroBanner from "./HeroBanner";
import Logo from "./Logo";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <div className="heroBanner">
      <div className="headerContainer">
        <Logo />
        <Navigation />
      </div>
      <HeroBanner />
    </div>
  );
};

export default Header;
