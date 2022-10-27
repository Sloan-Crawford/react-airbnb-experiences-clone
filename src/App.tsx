import React from "react";
import Home from "./Pages/Home";
import Code from "./Pages/Code";
import { Routes, Route } from "react-router-dom";
import NavigationBar from "./components/NavigationBar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="site-wrapper">
      <div className="site-content">
        <NavigationBar />
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
