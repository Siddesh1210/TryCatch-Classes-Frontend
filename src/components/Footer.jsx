import React from "react";
import "../App.css";
import footerBg from "../assets/images/footer-bg.png";
import logoLight from "../assets/images/logo.png";

const Footer = () => {
  return (
    <footer className="footer" id="footer" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="footer-top section">
        <div className="container grid-list">
          <div className="footer-brand">
            <a href="#" className="logo">
              <img src={logoLight} width="162" height="50" alt="EduWeb logo" />
            </a>
            <div className="wrapper">
              <span className="span">Add:</span>
              <address className="address">12th Floor, L.T. Road,Borivali West, Mumbai – 400092.
              </address>
            </div>
            <div className="wrapper">
              <span className="span">Call:</span>
              <a href="tel:++91 9664545072" className="footer-link">
                +91 9664545072
              </a>
            </div>
            <div className="wrapper">
              <span className="span">Email:</span>
              <a href="mailto:trycatchclasses@gmail.com" className="footer-link">
              trycatchclasses@gmail.com
              </a>
            </div>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Menu</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Courses
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Placements
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Contact US
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Courses</p>
            </li>
            <li>
              <a href="#" className="footer-link">
              MERN FullStack
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Java FullStack
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Manual Testing
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Data Science
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                Flutter Development
              </a>
            </li>
            <li>
              <a href="#" className="footer-link">
                IOS Training
              </a>
            </li>
          </ul>
          <div className="footer-list">
            <p className="footer-list-title">Contacts</p>
            <p className="footer-list-text">
              Enter your email address to register to our newsletter
              subscription
            </p>
            <form action="" className="newsletter-form">
              <input
                type="email"
                name="email_address"
                placeholder="Your email"
                required
                className="input-field"
              />
              <button type="submit" className="btn has-before">
                <span className="span">Subscribe</span>
                <ion-icon
                  name="arrow-forward-outline"
                  aria-hidden="true"
                ></ion-icon>
              </button>
            </form>
            <ul className="social-list">
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-facebook"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-instagram"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-twitter"></ion-icon>
                </a>
              </li>
              <li>
                <a href="#" className="social-link">
                  <ion-icon name="logo-youtube"></ion-icon>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            Copyright 2024 All Rights Reserved by{" "}
            <a href="#" className="copyright-link">
              TryCatch Classes
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
