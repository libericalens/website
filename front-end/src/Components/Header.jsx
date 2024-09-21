import React, { useState } from "react";
import iconPic from "../assets/liberica-icon.png";
import { Link, useLocation } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLinkClick = () => {
    setDropdownOpen(false);
  };

  return (
    <header className="shadow-md p-2 text-white bg-[#472e27]">
      <div className="flex justify-between items-center max-w-full mx-auto gap-2 sm:ml-0 md:ml-10">
        <Link to="/">
          <div className="flex items-center gap-2">
            <img src={iconPic} alt="icon" className="w-10 h-10 rounded-full " />
            <h1 className="font-bold text-xl sm:text-2xl flex flex-wrap gap-1">
              <span>Liberica Database</span>
            </h1>
          </div>
        </Link>
        <div className="hidden sm:inline">
          <ul className="flex gap-4 sm:mr-0 md:mr-10 ">
            <Link to="/">
              <li
                className={`font-bold hover:underline cursor-pointer ${
                  location.pathname === "/" ? "underline" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/dashboard">
              <li
                className={`font-bold hover:underline cursor-pointer ${
                  location.pathname === "/dashboard" ? "underline" : ""
                }`}
              >
                Dashboard
              </li>
            </Link>
            <Link to="/records">
              <li
                className={`font-bold hover:underline cursor-pointer ${
                  location.pathname === "/records" ? "underline" : ""
                }`}
              >
                Records
              </li>
            </Link>
            <Link to="/scan">
              <li
                className={`font-bold hover:underline cursor-pointer ${
                  location.pathname === "/scan" ? "underline" : ""
                }`}
              >
                Scan
              </li>
            </Link>
          </ul>
        </div>
        <div className="sm:hidden">
          <FaBars
            className="text-2xl cursor-pointer"
            onClick={handleDropdownToggle}
          />
          <ul
            id="dropdown-menu"
            className={`${
              dropdownOpen ? "" : "hidden"
            } absolute top-12 right-0 w-full bg-[#472e27] shadow-md py-2`}
          >
            <Link to="/" onClick={handleLinkClick}>
              <li
                className={`px-4 py-2 font-bold hover:bg-gray-100 ${
                  location.pathname === "/" ? "underline" : ""
                }`}
              >
                Home
              </li>
            </Link>
            <Link to="/dashboard" onClick={handleLinkClick}>
              <li
                className={`px-4 py-2 font-bold hover:bg-gray-100 ${
                  location.pathname === "/dashboard" ? "underline" : ""
                }`}
              >
                Dashboard
              </li>
            </Link>
            <Link to="/records" onClick={handleLinkClick}>
              <li
                className={`px-4 py-2 font-bold hover:bg-gray-100 ${
                  location.pathname === "/records" ? "underline" : ""
                }`}
              >
                Records
              </li>
            </Link>
            <Link to="/scan" onClick={handleLinkClick}>
              <li
                className={`px-4 py-2 font-bold hover:bg-gray-100 ${
                  location.pathname === "/scan" ? "underline" : ""
                }`}
              >
                Scan
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
