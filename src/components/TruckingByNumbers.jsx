import React from "react";

const TruckingByNumbers = () => {
  return (
    <div className="truckByNumContainer">
      <div className="truckByNumContent">
        <span className="contentTitle">Goldcost trucking by numbers</span>
        <span className="contentSubTitle">
          Started with just one truck and trailer in 2006 we have grown to
          become a leader in the truckload industry on the west coast.
        </span>
      </div>
      <div className="truckingNumbers">
        <div className="truckData">
          <span className="truckDataContentTitle">325+</span>
          <span className="truckDataContentSubTitle">Trucks</span>
        </div>
        <div className="truckData" style={{ borderRightWidth: 0 }}>
          <span className="truckDataContentTitle">1100+</span>
          <span className="truckDataContentSubTitle">Trailers</span>
        </div>
        <div className="truckData" style={{ borderBottomWidth: 0 }}>
          <span className="truckDataContentTitle">400+</span>
          <span className="truckDataContentSubTitle">Employees</span>
        </div>
        <div
          className="truckData"
          style={{ borderRightWidth: 0, borderBottomWidth: 0 }}
        >
          <span className="truckDataContentTitle">3+</span>
          <span className="truckDataContentSubTitle">Terminals</span>
        </div>
      </div>
    </div>
  );
};

export default TruckingByNumbers;
