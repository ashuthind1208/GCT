import React from "react";
import Header from "../components/Header";
import ShippingNeeds from "../components/ShippingNeeds";
import StartedBy from "../components/StartedBy";
import TruckingByNumbers from "../components/TruckingByNumbers";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <main className="mainContainer">
        <TruckingByNumbers />
        <ShippingNeeds />
        <StartedBy />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
