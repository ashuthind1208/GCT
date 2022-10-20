import React from "react";

const ShippingNeeds = () => {
  return (
    <>
      <div className="shippingNeedsContainer">
        <span className="truckDataContentTitle">
          Why Choose goldcoast for Your Shipping Needs?
        </span>
      </div>
      <div className="shippingNeedsContainer">
        <div className="shippingType">
          <span className="shippingTypeContentSubTitle">
            There When You Need Us
          </span>
          <div className="shippingDataContentSubTitle">
            <p>
              Our dedicated support team is here to give you that helping hand,
              whenever you need.
            </p>
            <p>
              We pride ourselves as one of the best carriers in the west USA.
            </p>
            <ul>
              <li>Dry Van Truckload</li>
              <li>High Cube Vans</li>
              <li>Dedicated Fleet</li>
              <li>​Direct Store Delivery</li>
              <li>​Yard Services</li>
              <li>​Logistics & Brokerage</li>
            </ul>
            <div style={{ marginTop: 30 }}>
              <span className="shipWithUs">Ship With Us</span>
            </div>
          </div>
        </div>
        <div className="shippingImg">
          <img src="/images/shipping.png" />
        </div>
      </div>
    </>
  );
};

export default ShippingNeeds;
