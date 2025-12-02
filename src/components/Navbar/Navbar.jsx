import React from 'react';
import lawLogo from '../../assets/law-logo.png'
import { NavLink } from "react-router-dom";
import "../Navbar/Navbar.css";

const Navbar = () => {
    const links = <>
      <NavLink to="/" className="menu-item">Home</NavLink>
      <NavLink to="/bookings" className="menu-item">My-Bookings</NavLink>
      <NavLink to="/blogs" className="menu-item">Blogs</NavLink>
      <NavLink to="/contact" className="menu-item">Contact Us</NavLink>
  </>
    return (
        <div className='bg-white text-black'>
         <div className="navbar max-w-6xl mx-auto py-4">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div className="flex">
        <img className='w-10' src={lawLogo} alt="" />
        <a className="btn btn-ghost text-xl">Law.BD</a>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-[#0EA106] border-0 text-white rounded-full px-8">Contact Now</a>
  </div>
</div>
</div>
    );
};

export default Navbar;