import React from "react";
import Home from "./Pages/Home";
import Code from "./Pages/Code";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-wrapper">
      <div className="site-content">
        <Navbar />
        <div className="full-height">
          <Routes>
              <Route path="/code" element={<Code />} />
              <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      <Footer />
      
    </div>
  )
}
