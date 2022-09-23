import React from "react";

export default function CodeComp() {
 return (
  <div>
   <pre>
    <code className="language-javascript">
     {`
import React from "react";
import star from "../images/red-star.png"

export default function CardProps(props) {
 
 return (
   <div className="card">
    <div className="card-image-container">
    {
     props.status !== "available" && 
     <div className="status">{props.status}</div>
    }
    <img 
     src={require("../images/" + props.image)} 
     alt="Experience-cards" 
     className="card-image"
    />
    </div>
    <div className="card-text-container">
     <p className="stats">
      <img 
       className="red-star" 
       src={star} alt="star"
      />
      <span className="rating">{props.rating}</span> 
      <span className="amount grey"> ({props.amount}) - </span>
      <span className="country grey">{props.country}</span>
     </p>
     <p className="exp-title">{props.title}</p>
     <p className="cost">
      <span className="bold">From "$"{props.cost}</span>/person
     </p>
    </div>
   </div>
 )
}`}
    </code>
   </pre>
  </div>
 )
}