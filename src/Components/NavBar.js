import React, { useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { FiX } from "react-icons/fi";
import "./NavBar.css";

function NavBar() {
  const [click, setclick] = useState(false);
  const handleClick = () => setclick(!click);
  const closeMobileMenu = () => setclick(false);

  return (
    <div className="header">
      <div className="container">
        <div className="header-con">
          <div className="mobile-menu" onClick={handleClick}>
            {click ? <FiX /> : <BiMenuAltLeft />}
          </div>
          <div className="logo-container">
            <a href="#">GlobalTalk</a>
          </div>
          <ul className="menu">
            <li className="menu-link">
              <a href="#">Main</a>
            </li>
            <li className="menu-link">
              <a href="#">Guide</a>
            </li>
            <li className="menu-link">
              <a href="#">Statistics</a>
            </li>
            <li className="menu-link">
              <a href="#">Games</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
