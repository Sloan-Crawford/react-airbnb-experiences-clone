import React from "react";
import Card from "../components/Card";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <div>
      <div className="main-container">
        <Hero />
        <div className="cards-container">
          <Card />
        </div>
      </div>
    </div>
  );
}