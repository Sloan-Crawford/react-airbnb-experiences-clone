import React from "react"
import cards from "../images/cards.jpeg"

export default function Hero() {
 return (
  <div className="hero-container">
   <div className="hero-image-container">
    <img src={cards} alt="Experience-cards" className="hero-image"/>
   </div>
   <h1 className="hero-title">Online Experiences</h1>
   <p className="hero-text">Join unique interactive activities led by incredible hosts</p>
  </div>
 )
}