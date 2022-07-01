import React, { useState } from "react";
import {
  MenuItemsCamera,
  MenuItemsAccessories,
  MenuItemsApps,
  MenuItemsGear,
  MenuItemsDeals,
} from "../data/MenuItemsCamera";
import { Link } from "react-router-dom";
import "./dropdown.css";

function Dropdown() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul
        onClick={handleClick}
        className={click ? "dropdown-menu clicked" : "dropdown-menu"}
      >
        {MenuItemsCamera.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className={item.cName}
                to={item.path}
                onClick={() => setClick(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Dropdown;
