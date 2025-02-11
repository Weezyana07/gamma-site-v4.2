import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsNavScrolled(true);
      } else {
        setIsNavScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`nav-wrapper ${isNavScrolled ? "sticky-nav" : ""}`}>
      <div className="logo">
        <a href="#">
          <img
            src="images/logo-home.png"
            alt="Logo"
            className={isNavScrolled ? "logo-small" : ""}
          />
        </a>
      </div>
      <button
        className="mobile-nav-toggle"
        onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        aria-controls="primary-navigation"
        aria-expanded={isMobileNavOpen}
      >
        <img
          className="icon-hamburger"
          src="images/icon-hamburger.png"
          alt="Menu"
        />
      </button>
      <nav
        className={`primary-navigation ${isMobileNavOpen ? "open" : "closed"}`}
      >
        <ul className="nav-list">
          <li>
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
          </li>
          <li className="dropdown-container">
          <NavLink to="/services" className="nav-link dropdown-toggle"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              Services
            </NavLink>
            <ul className={`dropdown ${isDropdownOpen ? "open" : ""}`}>
              <li>
                <NavLink to="/services#consultancy">Consultancy</NavLink>
              </li>
              <li>
                <NavLink to="/services#it">Information Technology</NavLink>
              </li>
              <li>
                <NavLink to="/services#manufacturing">Manufacturing</NavLink>
              </li>
              <li>
                <NavLink to="/services#construction">Construction</NavLink>
              </li>
              <li>
                <NavLink to="/services#contracts">General Contracts</NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink to="/about" className="nav-link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="nav-link">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
