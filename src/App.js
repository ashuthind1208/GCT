import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Thanks from "./pages/Thanks";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="Thanks" element={<Thanks />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
