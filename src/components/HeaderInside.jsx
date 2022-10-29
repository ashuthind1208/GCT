import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const HeaderInside = () => {
  const [custom, setCustom] = useState({ backgroundColor: "#f5cc00" });
  const [navCustom, setNavCustom] = useState({});

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setCustom({
        backgroundColor: "#000814",
        height: "15%",
        transition: "font-size 0.5s",
        top: "-30px",
        paddingBottom: "30px",
        transition:
          "height 0.5s ease-in-out, background-color 0.5s , opacity 0.5s ease-in",
      });
      setNavCustom({ color: "#f5cc00" });
    } else {
      setCustom({
        backgroundColor: "#f5cc00",
        transition:
          "height 0.5s ease-in-out, background-color 0.5s , opacity 0.5s ease-in",
      });
      setNavCustom({ color: "#000814" });
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      listenScrollEvent(e);
    });
  }, []);

  return (
    <div className="headerContainer" style={custom}>
      <Logo page="inside" style={custom} />
      <Navigation page="inside" customstyle={navCustom} />
    </div>
  );
};

export default HeaderInside;
