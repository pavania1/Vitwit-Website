import React, { useState } from "react";
import VitwitLogo from "../assets/vitwit-logo.png";
import HamburgerIcon from "./HamburgerIcon";
import CloseIcon from "./CloseIcon";
import "./Navbar.css"

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);
  return (
    <div>
      <div className="nav">
        <img className="nav__logo" src={VitwitLogo} alt="Vitwit Logo" />
        <div className="menu-list nav-text">
          <div>About Us</div>
          <div>Services</div>
          <div>Resolute</div>
          <div>Partners</div>
          <div>Ventures</div>
          <button className="get-touch-btn">Get in touch</button>
          <div
          className="inline-block tablet:hidden cursor-pointer"
          onClick={handleClick}
        >
          {open ? <CloseIcon /> : <HamburgerIcon />}
        </div>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
