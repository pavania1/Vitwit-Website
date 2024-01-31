import React from 'react'
import VitwitLogo from "../assets/vitwit-logo.png"

const Navbar=() =>{
  return (
    <div>
        <div className='nav'>
        <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
        <div className='menu-list'>
        <div>About Us</div>
        <div>Services</div>
        <div>Resolute</div>
        <div>Partners</div>
        <div>Ventures</div>
        <button className='get-touch-btn'>Get in touch</button>
        </div>
        </div>
    </div>
  )
}

export default Navbar