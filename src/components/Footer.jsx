import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/react.svg';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <div className='flex px-30 justify-between '>
        <img src={logo} className="w-12  " alt="Logo" />
        <nav className="flex justify-center space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <Link to="/Menu" className="hover:text-blue-400">Menu</Link>
          <Link to="/About" className="hover:text-blue-400">About</Link>
          <Link to="/Contact" className="hover:text-blue-400">Contact</Link>
        </nav>
      </div>
      <p className="mt-2 text-sm">© 2025 YourCompany. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
