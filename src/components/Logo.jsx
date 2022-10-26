import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ page }) => {
  return (
    <div className={page === "inside" ? "logoInside" : "logo"}>
      <span className={page === "inside" ? "logoAbbrInside" : "logoAbbr"}>
        <Link to="/">GCT</Link>
      </span>
      <span
        className={page === "inside" ? "logoFullNameInside" : "logoFullName"}
      >
        Gold Coast Trucking
      </span>
    </div>
  );
};

export default Logo;
