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
  return (
    <>
      <div className="pre-header">
        <div className="pre-header-last">
          <div className="header-glide-in">
            <div className="menu-desktop">
              <div>
                <div className="news">
                  <button type="button" aria-label="News">
                    <div
                      style={{
                        fontSize: "14px",
                        paddingRight: "8px",
                        color: "#fff",
                      }}
                    >
                      News
                    </div>
                    <div style={{ top: "2px" }}>
                      <i
                        aria-hidden="true"
                        className="fa-solid fa-caret-down"
                        style={{ fontSize: "calc(18px)", color: "#fff" }}
                      ></i>
                    </div>
                  </button>
                  <div className="dropdown-pre-header">
                    <ul>
                      <li className="dropdown-list-title">News</li>
                      <li>
                        <a
                          class="link-reset"
                          aria-label="Latest News"
                          target="_self"
                          href="/en/us/news"
                        >
                          Latest News
                        </a>
                      </li>
                      <li>
                        <a
                          class="link-reset  menu Dropdown_option__oG_W_ "
                          aria-label="Latest News"
                          target="_self"
                          href="/en/us/news"
                        >
                          Latest News
                        </a>
                      </li>
                      <li>
                        <a
                          class="link-reset  menu Dropdown_option__oG_W_ "
                          aria-label="GoPro Tips"
                          target="_self"
                          href="/en/us/news/tags/gopro-tips"
                        >
                          GoPro Tips
                        </a>
                      </li>
                      <li>
                        <a
                          class="link-reset  menu Dropdown_option__oG_W_ "
                          aria-label="World of GoPro"
                          target="_self"
                          href="/en/us/news/tags/world-of-gopro"
                        >
                          World of GoPro
                        </a>
                      </li>
                      <li>
                        <a
                          class="link-reset  menu Dropdown_option__oG_W_ "
                          aria-label="Heroes"
                          target="_self"
                          href="/en/us/news/tags/heroes"
                        >
                          Heroes
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={Logo} className="gopro" alt="GoPro Logo" />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="./cameras"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Cameras
            </Link>
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
            {dropdown && <Dropdown />}
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
