import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo-home.png";
import "./Header.css";

const Header = () => {
  const [isNavScrolled, setIsNavScrolled] = useState(false);
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsNavScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isNavScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Website Logo"
            className={`transition-all duration-300 ${
              isNavScrolled ? "h-16" : "h-16 scale-200"
            }`}
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/services" className="nav-link">
            Services
          </Link>
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
          <Link to="/compliance" className="nav-link">
            Com
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden block"
          onClick={() => setIsMobileNavOpen(!isMobileNavOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileNavOpen && (
        <div className="md:hidden flex flex-col bg-white shadow-md py-2">
          <Link to="/" className="nav-link">
            Home
          </Link>
          <button
            className="nav-link"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            Services
          </button>
          {isDropdownOpen && (
            <div className="pl-4">
              <Link to="/consultancy" className="dropdown-item">
                Consultancy
              </Link>
              <Link to="/it" className="dropdown-item">
                IT Services
              </Link>
              <Link to="/manufacturing" className="dropdown-item">
                Manufacturing
              </Link>
              <Link to="/construction" className="dropdown-item">
                Construction
              </Link>
              <Link to="/general-contracts" className="dropdown-item">
                General Contracts
              </Link>
            </div>
          )}
          <Link to="/about" className="nav-link">
            About
          </Link>
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
