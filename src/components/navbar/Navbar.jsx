import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import "./navbar.css";
import Logo from "../../assets/goprologo.svg";

function Navbar() {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={Logo} className="gopro" alt="GoPro Logo" />
      </Link>
      <div className="menu-icon" onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"} />
      </div>
      <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li
          className="nav-item"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Link to="./cameras" className="nav-links" onClick={closeMobileMenu}>
            Cameras <i className="fa-solid fa-chevron-down" />
          </Link>
          {dropdown && <Dropdown />}
        </li>
        <li className="nav-item">
          <Link to="./apps" className="nav-links" onClick={closeMobileMenu}>
            Apps
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="./accessories"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            Accessories
          </Link>
        </li>
        <li className="nav-item">
          <Link to="./gear" className="nav-links" onClick={closeMobileMenu}>
            Lifestyle Gear
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="./subscription"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            GoPro Subscription
          </Link>
        </li>
        <li className="nav-item">
          <Link to="./deals" className="nav-links" onClick={closeMobileMenu}>
            Deals <i className="fa-solid fa-chevron-down" />
            {/* fas fa-caret-down */}
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
