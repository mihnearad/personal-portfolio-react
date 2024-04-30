import React, { useState, useRef } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./Navbar.css";
import logo from "../../assets/MRLogo.svg";
import underline from "../../assets/nav_underline.svg";
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
    <div className="navbar">
      <img src={logo} className="navbar-logo" alt="" />
      <img src={menu_open} onClick={openMenu} className="nav-mob-open" alt="" />
      <ul ref={menuRef} className="nav-menu">
        <img
          src={menu_close}
          onClick={closeMenu}
          alt=""
          className="nav-mob-close"
        />
        <li>
          <AnchorLink className="anchor-link" href="#home">
            <p
              onClick={() => setMenu("home")}
              style={
                menu === "home" ? { color: "white", fontWeight: "bold" } : {}
              }
            >
              Home
            </p>
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" href="#about">
            <p
              onClick={() => setMenu("about")}
              style={
                menu === "about" ? { color: "white", fontWeight: "bold" } : {}
              }
            >
              About
            </p>{" "}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#projects">
            <p
              onClick={() => setMenu("projects")}
              style={
                menu === "projects"
                  ? { color: "white", fontWeight: "bold" }
                  : {}
              }
            >
              Projects
            </p>{" "}
          </AnchorLink>
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skills">
            <p
              onClick={() => setMenu("skills")}
              style={
                menu === "skills" ? { color: "white", fontWeight: "bold" } : {}
              }
            >
              Skills
            </p>{" "}
          </AnchorLink>
          {menu === "portfolio" ? <img src={underline} alt="" /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p
              onClick={() => setMenu("contact")}
              style={
                menu === "contact" ? { color: "white", fontWeight: "bold" } : {}
              }
            >
              Contact
            </p>{" "}
          </AnchorLink>
        </li>
      </ul>
      <div className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          <p onClick={() => setMenu("contact")}>Connect With Me</p>
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
