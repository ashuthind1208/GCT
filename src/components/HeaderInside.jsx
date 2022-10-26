import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";

const HeaderInside = () => {
  return (
    <div>
      <div className="headerContainer">
        <Logo page="inside" />
        <Navigation page="inside" />
      </div>
    </div>
  );
};

export default HeaderInside;
