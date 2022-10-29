import React from "react";
import { Link } from "react-router-dom";

const Logo = ({ page, custom }) => {
  return (
    <div className={page === "inside" ? "logoInside" : "logo"}>
      <span className={page === "inside" ? "logoAbbrInside" : "logoAbbr"}>
        <Link to="/">
          <img src="/images/logo.png" className="logoImg" style={custom} />
        </Link>
      </span>
      {/*<span
        className={page === "inside" ? "logoFullNameInside" : "logoFullName"}
      >
        Gold Coast Trucking
  </span> */}
    </div>
  );
};

export default Logo;
