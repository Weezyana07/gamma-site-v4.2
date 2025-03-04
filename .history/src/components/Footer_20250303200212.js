import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as FacebookLogo } from "../assets/images/facebook.svg";
import { ReactComponent as XLogo } from "../assets/images/xx.svg";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Company Info */}
        <div>
          <h2 className="text-lg font-semibold">Gamma Spectre Solutions</h2>
          <p className="text-sm mt-2">
            Leading innovation in IT & Business Solutions.
          </p>
        </div>

        {/* Navigation Links */}
        <nav aria-label="Footer Navigation" className="space-y-2">
          <Link to="/" className="block hover:text-gray-400">
            Home
          </Link>
          <Link to="/services" className="block hover:text-gray-400">
            Services
          </Link>
          <Link to="/about" className="block hover:text-gray-400">
            About
          </Link>
          <Link to="/contact" className="block hover:text-gray-400">
            Contact
          </Link>
        </nav>

        {/* Social Media */}
        <div className="flex space-x-4">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FacebookLogo className="h-6 w-6 text-white hover:text-gray-400" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <XLogo className="h-6 w-6 text-white hover:text-gray-400" />
          </a>
        </div>
      </div>
      <div className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} Gamma Spectre Solutions. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
