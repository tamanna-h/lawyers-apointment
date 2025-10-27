import React from 'react';
import lawLogo from '../../assets/law-logo.png'
import { Link } from 'react-router';

const Navbar = () => {
    const links = <>
    <Link to='/'><li className='m-2 px-3'>Home</li></Link>
    <Link to='/bookings'><li className='m-2 px-3'>My-Bookings</li></Link>
    <Link to='/blogs'><li className='m-2 px-3'>Blogs</li></Link>
    <Link to='/contact'><li className='m-2 px-3'>Contact Us</li></Link>
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