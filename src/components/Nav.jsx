import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "../assets/pizzaLogo.png";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={Logo} alt="logo" className="h-10 w-16 mr-3" />
        </Link>

        {/* Mobile Menu Button */}
        <button 
          onClick={toggleMenu} 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Navigation Links */}
        <div className={`w-full md:block md:w-auto ${isOpen ? "block" : "hidden"}`}>
          <div className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <Link to="/" className="block py-2 px-3 text-gray-700 hover:text-blue-500 transition-all rounded-md md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500">
              Home
            </Link>
            <Link to="/Menu" className="block py-2 px-3 text-gray-700 hover:text-blue-500 transition-all rounded-md md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500">
              Menu
            </Link>
            <Link to="/About" className="block py-2 px-3 text-gray-700 hover:text-blue-500 transition-all rounded-md md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500">
              About
            </Link>
            <Link to="/Contact" className="block py-2 px-3 text-gray-700 hover:text-blue-500 transition-all rounded-md md:bg-transparent md:p-0 dark:text-white md:dark:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
