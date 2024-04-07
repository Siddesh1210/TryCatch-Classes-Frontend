import React, { useEffect } from 'react';

const NavbarToggle = () => {
  useEffect(() => {
    const addEventOnElem = function (elem, type, callback) {
      if (elem.length > 1) {
        for (let i = 0; i < elem.length; i++) {
          elem[i].addEventListener(type, callback);
        }
      } else {
        elem.addEventListener(type, callback);
      }
    }

    const toggleNavbar = function () {
      const navbar = document.querySelector("[data-navbar]");
      const overlay = document.querySelector("[data-overlay]");
      navbar?.classList?.toggle("active");
      overlay?.classList?.toggle("active");
    }

    const closeNavbar = function () {
      const navbar = document.querySelector("[data-navbar]");
      const overlay = document.querySelector("[data-overlay]");
      navbar?.classList?.remove("active");
      overlay?.classList?.remove("active");
    }

    const activeElem = function () {
      const header = document.querySelector("[data-header]");
      const backTopBtn = document.querySelector("[data-back-top-btn]");

      if (window.scrollY > 100) {
        header?.classList?.add("active");
        backTopBtn?.classList?.add("active");
      } else {
        header?.classList?.remove("active");
        backTopBtn?.classList?.remove("active");
      }
    }

    const navTogglers = document.querySelectorAll("[data-nav-toggler]");
    const navLinks = document.querySelectorAll("[data-nav-link]");

    addEventOnElem(navTogglers, "click", toggleNavbar);
    addEventOnElem(navLinks, "click", closeNavbar);
    addEventOnElem(window, "scroll", activeElem);

    // Cleanup function
    return () => {
      navTogglers.forEach(toggler => toggler.removeEventListener("click", toggleNavbar));
      navLinks.forEach(link => link.removeEventListener("click", closeNavbar));
      window.removeEventListener("scroll", activeElem);
    }
  }, []);

  return null; // or return any JSX if needed
}

export default NavbarToggle;
