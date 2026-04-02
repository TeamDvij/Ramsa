import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/ramsaLogo.png";

const Navbar = () => {
  const navLinkClass = ({ isActive }) => {
    return isActive
      ? "text-blue-700 dark:text-blue-300 border-b-2 border-blue-700 dark:border-blue-300 pb-1"
      : "text-slate-600 dark:text-slate-400 hover:text-blue-900 dark:hover:text-white transition-colors";
  };
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl shadow-sm dark:shadow-none">
      <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
        <div
          className="flex gap-1 items-center"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          <img
            src={logo}
            alt="Aasha Logo"
            className="h-14 md:h-16 lg:h-20 w-auto"
          />
        </div>
        {/* <p
          className="text-2xl font-bold tracking-tighter text-blue-900 dark:text-white font-headline"
          onClick={() => (window.location.href = "/")}
        >
          Ramsa Enterprises
        </p> */}
        <div className="hidden md:flex items-center gap-8 font-manrope text-sm font-medium tracking-tight">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/service" className={navLinkClass}>
            Service
          </NavLink>
          <NavLink to="/careers" className={navLinkClass}>
            Career
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>
        <button className="bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-2.5 rounded-lg font-label text-sm font-semibold tracking-wide scale-95 active:scale-90 transition-transform hover:shadow-lg">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
