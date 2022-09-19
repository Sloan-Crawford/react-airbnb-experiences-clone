import React from "react"
import pic from "../images/buz-coach.jpeg"
import star from "../images/red-star.png"

export default function Card() {
 return (
  <div className="card-container">
   <div className="card">
    <div className="card-image-container">
    <div className="status">sold out</div>
     <img src={pic} alt="Experience-cards" className="card-image"/>
    </div>
    <div className="card-text-container">
     <p className="rating">
      <img className="red-star" src={star} alt="star"/>
      <span>5.0</span> 
      <span> (6) - </span>
      <span>USA</span>
     </p>
     <p className="exp-title">Life Lessons with Aftab</p>
     <p className="cost"><span>From $136</span>/person</p>
    </div>
   </div>


   <div className="card">
    <div className="card-image-container">
    <div className="status">sold out</div>
     <img src={pic} alt="Experience-cards" className="card-image"/>
    </div>
    <div className="card-text-container">
     <p className="rating"><span>5.0</span> 6 USA</p>
     <p className="exp-title">Life Lessons with Aftab</p>
     <p className="cost"><span>From $136</span>/person</p>
    </div>
   </div>
  </div>
 )
}