import React from "react";
import { Link } from "react-router-dom";

const Navigation = ({ page, customstyle }) => {
  return (
    <div
      id={
        page === "inside" ? "navigationContainerInside" : "navigationContainer"
      }
    >
      <ul>
        <li>
          <Link to="/about" style={customstyle}>
            About
          </Link>
        </li>
        <li>
          <Link to="/services" style={customstyle}>
            Services
          </Link>
        </li>
        <li style={customstyle}>Careers</li>
        <li>
          <Link to="/contact" style={customstyle}>
            Contact
          </Link>
        </li>
        <li className="navDriveUs">Drive with us</li>
      </ul>
    </div>
  );
};

export default Navigation;
