import React from 'react';
import pic from "../images/airbnb-logo-min.png"

export default function Navbar() {
  return (
    <nav className='nav'>
        <img src={pic} alt="AirBnb logo" className='logo'/>
    </nav>
  )
};