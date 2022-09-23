import React from 'react';
import pic from "../images/airbnb-logo-min.png"
import pic2 from "../images/code-icon-peach.svg"
import { NavLink } from "react-router-dom";
import image from "../images/github-logo-with-text.png"
import image2 from "../images/envelope.svg"

export default function Navbar() {
  return (
    <div className='nav-container'>
      <nav className="nav">
        <div className="nav-links">
          <NavLink to ="/">
            <img src={pic} alt="AirBnb logo" className='logo'/>
          </NavLink>
          <NavLink to ="/code">
            <img src={pic2} alt="AirBnb logo" className='logo'/>
          </NavLink>
        </div>
        <div className='social-links'>
          <a target="#" href="https://github.com/Sloan-Crawford/" className='social-link'>
            <img src={image} alt="LinkedIn"/>
          </a>
          <a target="#" href="mailto: sloan.crawford@gmail.com" className='social-link'>
            <img src={image2} alt="email"/>
          </a>
        </div>

      </nav>
    </div>
  )
};
