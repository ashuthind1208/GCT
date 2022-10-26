import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ page }) => {
  return (
    <div
      id={
        page === "inside" ? "navigationContainerInside" : "navigationContainer"
      }
    >
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>Careers</li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navDriveUs">Drive with us</li>
      </ul>
    </div>
  );
};

export default Navigation;
