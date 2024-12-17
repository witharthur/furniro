import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { assets } from "../../assets/assets";

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setIsNavbarOpen(!isNavbarOpen);
  };

  return (
    <div className="navbar">
      <div className="navbar-logo">
        <img src={assets.logo} alt="" />
        Furniro</div>

      <nav className="nav">
        <div className="navbar-toggle" onClick={toggleNavbar}>
          <img
            src={isNavbarOpen ? assets.close_icon : assets.menu_icon}
            alt="menu-toggle"
          />
        </div>

        <ul className={`navbar-links ${isNavbarOpen ? "show" : ""}`}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/shop">Shop</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <div className="navbar-left">
        <div className="profile">
          <img
            src={assets.profile_icon}
            style={{ width: "25px", height: "25px" }}
            alt="Profile"
          />
        </div>
        <div className="search">
          <img
            src={assets.search_icon}
            style={{ width: "25px", height: "25px" }}
            alt="Search"
          />
        </div>
        <div className="liked">
          <img
            src={assets.heart_icon}
            style={{ width: "25px", height: "25px" }}
            alt="Liked"
          />
        </div>
        <div className="cart">
          <img
            src={assets.card_icon}
            style={{ width: "25px", height: "25px" }}
            alt="Cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
