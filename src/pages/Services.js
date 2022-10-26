import React from "react";
import Footer from "../components/Footer";
import HeaderInside from "../components/HeaderInside";

const Services = () => {
  return (
    <div className="App">
      <HeaderInside />
      <div className="aboutUsContainer">
        <div className="aboutUsTitle">
          Our Solutions
          <hr />
        </div>
        <div className="serviceSections">
          <div className="serviceSectionContent">
            <div>
              <div className="serviceSectionHeading">
                Regional & Dedicated Dry Van Specialists
              </div>
              <div className="serviceSectionText">
                <b>Dedicated:</b> Cheema is able to provide all the benefits of
                a private fleet without the hassle and overhead. We build a
                custom dedicated program or transition from an existing service
                provider to improve the overall process. We are also able to
                provide back haul options to reduce costs and offer a revenue
                sharing program.
                <br />
                <br />
                <b>High Cube:</b> Cheema’s Dry Vans are not the industry typical
                trailer. Over 60% of our van fleet is 14’ High Cube. Our High
                Cube trailers provide more loading capacity and allow savings to
                our customers. Our High Cubes have an inside height of 117” and
                a inside width of 101.25”. That’s over 8% more cubic volume per
                load, it takes 12 standard vans to ship the same amount of
                volume that 11 High Cube vans can!
                <br />
                <br />
                All of our vans are capable of hauling 46,000 to maximize
                payload and are outfitted with EPA Smartway certified side
                skirts and low-rolling resistance tires.
              </div>
            </div>

            <div className="serviceImages">
              <img src="/images/aboutUsTruck.jpg" alt="serviceImage" />
            </div>
          </div>
          <div className="serviceSectionContent">
            <div className="serviceImages">
              <img src="/images/aboutUsTruck.jpg" alt="serviceImage" />
            </div>
            <div>
              <div className="serviceSectionHeading">
                Short Haul, Local, & Direct Store Delivery
              </div>
              <div className="serviceSectionText">
                Short-haul, regional, and local dry truckload services are our
                specialty.
                <br />
                <br />
                We have fleets strategically located across the west to service
                all the major western markets. Our professional drivers, modern
                equipment, and experienced back office staff have what it takes
                to perform at service levels.
                <br />
                <br />
                Our well-trained and safe drivers know the lay of land,
                resulting in superior customer experiences.
              </div>
            </div>
          </div>
          <div className="serviceSectionContent">
            <div>
              <div className="serviceSectionHeading">
                Drop Trailers & Yard Hostling
              </div>
              <div className="serviceSectionText">
                Yard management and yard jockey services are offered with
                state-of-the-art equipment, professional drivers, and many times
                onsite personnel. We offer around the clock services with
                qualified drivers to help streamline operations and reduce your
                cost.
              </div>
            </div>

            <div className="serviceImages">
              <img src="/images/aboutUsTruck.jpg" alt="serviceImage" />
            </div>
          </div>
        </div>
        <hr />
        <div className="serviceSections">
          <div className="serviceSectionHeading2">
            3 Terminals to serve you better
          </div>
          <div className="terminals">
            <div className="terminalSection">
              <div className="terminalSectionHeading">Lathrop, California</div>
              <div className="terminalSectionText">
                A view of our 10-acre terminal located in the San Joaquin Valley
                in Northern California.
              </div>
              <div className="terminalImages">
                <img src="/images/cali.jpg" alt="serviceImage" />
              </div>
            </div>
            <div className="terminalSection">
              <div className="terminalSectionHeading">Sumner, Washington</div>
              <div className="terminalSectionText">
                Our 8-acre terminal in beautiful Washington state is our company
                headquarters.
              </div>
              <div className="terminalImages">
                <img src="/images/wash.jpg" alt="serviceImage" />
              </div>
            </div>
            <div className="terminalSection">
              <div className="terminalSectionHeading">Albany, Oregon</div>
              <div className="terminalSectionText">
                Our 5-acre terminal is located in the heart of central Oregon.
                We have an additional 12-acres for future growth.
              </div>
              <div className="terminalImages">
                <img src="/images/yard.jpg" alt="serviceImage" />
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div>
          <div className="brandSectionHeading">Together With Strong Brands</div>
          <div className="brandSection">
            <div className="brandSectionText">
              We let the satisfaction of our clients speak for us. Since 2006 we
              have been providing quality customer service with a focus on
              safety, cost, and efficiency.
              <ul>
                <li>
                  Awarded Northwest Regional Carrier of the year in 2017 and
                  2018 by Quaker/Gatorade
                </li>
                <li>
                  Awarded Dry Inbound Carrier of the Year 2016 by ConAgra Brands
                </li>
                <li>
                  Awarded Western Region Carrier of the Year 2014 by Continental
                  Mills
                </li>
                <li>
                  Awarded Service Excellence Award in 2018 by Vantix
                  Logistics/McLane Foods
                </li>
                <li>
                  Awarded National Carrier of the Year 2019 by Georgia Pacific.
                  98.8% on-time performance for over 4500 loads carried safely.
                </li>
                <li>
                  ​Awarded 2020 SmartWay Excellence for moving more goods more
                  miles with lower emissions and less energy.
                </li>
              </ul>
              ​
            </div>
            <div className="brandSectionImage">
              <img alt="brands" src="/images/brands.jpg" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
