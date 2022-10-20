import "./App.css";
import Header from "./components/Header";
import ShippingNeeds from "./components/ShippingNeeds";
import StartedBy from "./components/StartedBy";
import TruckingByNumbers from "./components/TruckingByNumbers";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="mainContainer">
        <TruckingByNumbers />
        <ShippingNeeds />
        <StartedBy />
        <Footer />
      </main>
    </div>
  );
}

export default App;
