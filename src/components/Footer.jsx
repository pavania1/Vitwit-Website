import React from 'react'
import VitwitLogo from "../assets/vitwit-logo.png"
import LinkedlnLogo from '../assets/social-icons/linkedln.png';

import { Link } from "react-router-dom"

const Footer=() =>{
  return (
    <div className='footer'>
      <div className='flex flex-col justify-center items-start gap-6'>
      <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
      <p className=''>Feel free to contact us by filling this form or you can even {'\u00A0'} reach us out from the social media links below.</p>
      </div>
  <div> Join our community</div>
  <div className='flex justify-between'></div>
<SocialIcon image={LinkedlnLogo}/>
    </div>
  )
}

export default Footer

const SocialIcon =({image, link="https://www.google.com"}) => {
  return (
    <div className='flex-center'>
      <Link to={link} target="_blank">
        <img className='' src={image} alt="" />
      </Link>
    </div>
  )
}