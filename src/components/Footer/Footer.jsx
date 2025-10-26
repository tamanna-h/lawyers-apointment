import React from 'react';
import lawLogo from '../../assets/law-logo.png'

const Footer = () => {
    return (
<footer className="footer footer-horizontal footer-center bg-black text-base-content rounded p-10 w-full">
    <nav className="flex">
        <img className='w-10' src={lawLogo} alt="" />
        <a className="btn btn-ghost text-xl">Law.BD</a>
    </nav>
  <nav className="grid grid-flow-col gap-4">
    <a className="link link-hover">Home</a>
    <a className="link link-hover">My-Bookings</a>
    <a className="link link-hover">Blogs</a>
    <a className="link link-hover">Contact Us</a>
  </nav>
  <nav>
  <div className="grid grid-flow-col gap-4">
    {/* Facebook */}
    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
      <div className="bg-[#1877F2] p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M9 8H6v4h3v12h5V12h3.642l.358-4h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
        </svg>
      </div>
    </a>

    {/* X (Twitter) */}
    <a href="https://x.com" target="_blank" rel="noopener noreferrer">
      <div className="bg-black p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.37l-5.238-6.853L4.95 21.75H1.64l7.73-8.842L1.167 2.25h5.89l4.713 6.17L18.244 2.25zM17.145 19.62h1.833L7.95 4.282H5.983L17.145 19.62z" />
        </svg>
      </div>
    </a>

    {/* LinkedIn */}
    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
      <div className="bg-[#0A66C2] p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M19 0h-14C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM7.12 20.45H3.56V9h3.56v11.45zM5.34 7.55c-1.14 0-2.06-.93-2.06-2.06s.93-2.06 2.06-2.06 2.06.93 2.06 2.06-.93 2.06-2.06 2.06zM20.45 20.45h-3.56v-5.56c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.95v5.65h-3.56V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.39-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24z"/>
        </svg>
      </div>
    </a>

    {/* YouTube */}
    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
      <div className="bg-[#FF0000] p-2 rounded-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="white"
        >
          <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0C.488 3.45.029 5.804 0 12c.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0C23.512 20.549 23.971 18.195 24 12c-.029-6.185-.484-8.549-4.385-8.816zM9 16V8l8 4-8 4z"/>
        </svg>
      </div>
    </a>
  </div>
</nav>

</footer>
    );
};

export default Footer;