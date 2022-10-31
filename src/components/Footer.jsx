import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footerContainer">
        <div className="footerLogoSection">
          <img src="/images/logo.png" className="logoImg" />
          <span className="footerAddress">
            1435 West Valley Hwy N
            <br />
            Auburn WA, United States, 98001
          </span>
          <span className="footerAddress">(253) 733-5718 / (253) 249-7563</span>
          <span className="footerAddress">24 hour dispatch- 206-981-0849</span>

          <a
            className="footerAddress"
            href="mailto:'contact@goldcoastrucking.com"
          >
            contact@goldcoastrucking.com
          </a>

          <div className="socialMedia">
            <img alt="social" src="/logo-facebook.svg" width={40} />
            <img alt="social" src="/logo-instagram.svg" width={40} />
            <img alt="social" src="/logo-linkedin.svg" width={40} />
            <img alt="social" src="/logo-youtube.svg" width={40} />
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
