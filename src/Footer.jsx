import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLogoSection">
          <span className="footerLogoAbbr">GCT</span>
          <span className="footerLogoFullName">GoldCoast Trucking</span>
          <span className="footerAddress">
            2720 E Valley Hwy E, Sumner
            <br />
            Washington 98390, United States
          </span>
          <span className="footerAddress">(253) 733-5718</span>
          <span className="footerAddress">team@gct.com</span>
          <div className="socialMedia">
            <img src="/logo-facebook.svg" width={40} />
            <img src="/logo-instagram.svg" width={40} />
            <img src="/logo-linkedin.svg" width={40} />
            <img src="/logo-youtube.svg" width={40} />
          </div>
        </div>
        <div className="footerLinksSection">
          <span className="truckDataContentTitle" style={{ marginBottom: 20 }}>
            Links
          </span>
          <span className="footerLink">Home</span>
          <span className="footerLink">About Us</span>
          <span className="footerLink">Services</span>
          <span className="footerLink">Careers</span>
          <span className="footerLink">Contact</span>
        </div>
        <div className="footerSubscribeSection">
          <span className="truckDataContentTitle" style={{ marginBottom: 20 }}>
            Subscribe to us
          </span>
          <span className="footerLink">
            For regular updates from Cheema Freightlines
            <br />
            <br />
            and job opportunities, leave us your email address.
          </span>
          <div>
            <input type="text" className="subscribeText" />
            <button className="subscribeButton">Submit</button>
          </div>
        </div>
      </div>
      <div className="copyright">
        <span>GCT Copyright All Rights Reserved © 2022</span>
      </div>
    </>
  );
};

export default Footer;
