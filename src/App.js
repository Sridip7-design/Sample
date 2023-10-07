import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
// import Service, { Contact } from "./Pages/Contact";
// import Menu from "./Pages/Menu";
import { Contact } from "./Pages/Contact";
import Navbar from "./Components/Common/Navbar";
import { About } from "./Pages/About";
import "./App.css";

import { Topbar } from "./Components/Common/Topbar";
import { Service } from "./Pages/Service";
import { Appointment } from "./Pages/Appointment";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/appointment" element={<Appointment />} />
      </Routes>
    </Router>
  );
}

export default App;
