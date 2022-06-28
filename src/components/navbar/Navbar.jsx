import React, { useState } from "react";
import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./navbar.css";
import Logo from "../../assets/goprologo.svg";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} alt="GoPro Logo" />
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
