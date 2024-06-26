import React from "react";
import "../App.css";
import logo from "../assets/images/logo.png";
import NavbarToggle from "./NavbarToggle";

const Navbar = () => {
  return (
    <header className="header" data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src={logo} width="162" height="50" alt="TryCatch logo" />
        </a>
        <NavbarToggle />
        <nav className="navbar" data-navbar>
          <div className="wrapper">
            <a href="#" className="logo">
              <img src={logo} width="162" height="50" alt="TryCatch logo" />
            </a>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link>
                Home
              </a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link>
                About
              </a>
            </li>
            <li className="navbar-item">
              <a href="#courses" className="navbar-link" data-nav-link>
                Courses
              </a>
            </li>
            <li className="navbar-item">
              <a href="#footer" className="navbar-link" data-nav-link>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="header-actions">
          <button
            className="header-action-btn"
            aria-label="toggle search"
            title="Search"
          >
            <ion-icon name="search-outline" aria-hidden="true"></ion-icon>
          </button>
          <button className="header-action-btn" aria-label="cart" title="Cart">
            <ion-icon name="cart-outline" aria-hidden="true"></ion-icon>
            <span className="btn-badge">0</span>
          </button>
          <a href="#" className="btn has-before">
            <span className="span">Try for free</span>
            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </a>
          <button
            className="header-action-btn"
            aria-label="open menu"
            data-nav-toggler
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>
        <div className="overlay" data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
};

export default Navbar;
