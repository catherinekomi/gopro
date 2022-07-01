import React from "react";
import "./navbar.css";

function PreNavbar() {
  return (
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
                        className="link-reset"
                        aria-label="Latest News"
                        target="_self"
                        href="/en/us/news"
                      >
                        Latest News
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-reset  menu Dropdown_option__oG_W_ "
                        aria-label="Latest News"
                        target="_self"
                        href="/en/us/news"
                      >
                        Latest News
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-reset  menu Dropdown_option__oG_W_ "
                        aria-label="GoPro Tips"
                        target="_self"
                        href="/en/us/news/tags/gopro-tips"
                      >
                        GoPro Tips
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-reset  menu Dropdown_option__oG_W_ "
                        aria-label="World of GoPro"
                        target="_self"
                        href="/en/us/news/tags/world-of-gopro"
                      >
                        World of GoPro
                      </a>
                    </li>
                    <li>
                      <a
                        className="link-reset  menu Dropdown_option__oG_W_ "
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
  );
}

export default PreNavbar;
