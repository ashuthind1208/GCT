import React from "react";
import Footer from "../components/Footer";
import HeaderInside from "../components/HeaderInside";

const About = () => {
  return (
    <div className="App">
      <HeaderInside />
      <div className="aboutUsContainer">
        <div className="aboutUsTitle">
          Humble Beginnings
          <hr />
        </div>
        <div className="aboutUsContent">
          <div className="truckerImg">
            <img alt="trucker" src="/images/trucker.jpg" />
          </div>
          <div className="truckerContent">
            Darshan Cheema started his career in trucking as and owner-operator
            in the Seattle/Tacoma area. <br />
            <br />
            In 2006, he and his sons started the business with one truck and one
            reefer trailer. While Darshan was burning rubber on the road, Harman
            was trying to book as many loads as possible after school.
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
