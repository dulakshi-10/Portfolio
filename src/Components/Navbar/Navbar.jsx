import React, { useState, useRef } from "react";
import "./Navbar.css";

import underline from "../../assets/nav_underline.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import menu_close from "../../assets/menu_close.svg";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <nav className="navbar">
      <h1 className="navbar-logo">Dulakshi Somarathna</h1>

      <img
        src={menu_open}
        alt="open menu"
        className="nav-mob-open"
        onClick={openMenu}
      />

      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          alt="close menu"
          className="nav-mob-close"
          onClick={closeMenu}
        />

        {["home", "about", "services", "work", "contact"].map((item) => {
          const label =
            item === "home"
              ? "Home"
              : item === "about"
              ? "About Me"
              : item === "services"
              ? "Services"
              : item === "work"
              ? "Portfolio"
              : "Contact";
          return (
            <li key={item}>
              <AnchorLink
                className="anchor-link"
                offset={50}
                href={`#${item}`}
                onClick={() => {
                  setMenu(item);
                  closeMenu();
                }}
              >
                <p className={menu === item ? "active" : ""}>{label}</p>
              </AnchorLink>
              {menu === item && (
                <img src={underline} alt="underline" className="underline" />
              )}
            </li>
          );
        })}
      </ul>

      <div className="nav-connect">
        <AnchorLink
          className="anchor-link connect-link"
          offset={50}
          href="#contact"
          onClick={() => setMenu("contact")}
        >
          Connect With Me
        </AnchorLink>
      </div>
    </nav>
  );
};

export default Navbar;
