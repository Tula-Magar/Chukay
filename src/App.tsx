import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./GeneralPages/HomePage";
import About from "./GeneralPages/Aboutme";
import Contact from "./GeneralPages/Contact";
import Nav from "./navigation/nav";
import "./App.css";
import Footer from "./GeneralPages/Footer";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <div className="shape">
          <div className="circle"></div>
        </div>
        <div className="content">
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </HashRouter>
  );
}

export default App;
