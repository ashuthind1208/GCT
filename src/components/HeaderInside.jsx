import React from "react";
import Logo from "./Logo";
import Navigation from "./Navigation";
import { useState, useEffect } from "react";

const HeaderInside = () => {
  const [custom, setCustom] = useState({
    backgroundColor: "transparent",
  });
  const [navCustom, setNavCustom] = useState({});
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  const listenScrollEvent = (e) => {
    if (window.scrollY > 50) {
      setCustom({
        backgroundColor: "#000814",
        height: "15%",
        top: "-25px",
        borderBottom: "solid 2px #f5cc00",
        boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)",
        transition:
          "height 0.5s ease-in-out, background-color 0.5s , opacity 0.5s ease-in, top 0.5s ease-in",
      });
      setNavCustom({ color: "#f5cc00" });
    } else {
      setCustom({
        backgroundColor: "transparent",
        transition:
          "height 0.5s ease-in-out, background-color 0.5s , opacity 0.5s ease-in, top 0.5s ease-out",
      });
      setNavCustom({ color: "#000814" });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    handleScroll();
    window.addEventListener("scroll", (e) => {
      console.log(window.scrollY);
      listenScrollEvent(e);
    });
  }, [window.addEventListener]);

  return (
    <div className="headerContainer" style={custom}>
      <Logo page="inside" style={custom} />
      <Navigation page="inside" customstyle={navCustom} />
    </div>
  );
};

export default HeaderInside;
