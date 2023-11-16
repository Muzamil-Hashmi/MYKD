'use client'
import { navLinks } from '@/utils/navLinks';
import React, { useState } from 'react';
import "./Header.css";

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="p-4">
      <div className="flex items-center justify-between">
        <div className="text-white font-bold text-lg">YourLogo</div>

        <div className="hidden md:flex space-x-4">
        {
  navLinks.map((links) => (
    <React.Fragment key={links.id}>
      <div className="relative group">
        <a
          href={links.link}
          className="text-white relative inline-block overflow-hidden hover:text-green-500 active:text-green-500"
        >
          {links.name}
          <span className="slash-line"></span>
        </a>
        {links.subNav && (
          <div className="hidden absolute z-10 left-0 mt-2 space-y-2 bg-white text-black group-hover:block">
            {links.subNav.map((subNav) => (
              <a
                key={subNav.id}
                href={subNav.link}
                className="block px-4 py-2 hover:bg-gray-200"
              >
                {subNav.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </React.Fragment>
  ))
}

        </div>

        {/* Search Icon, Sign In Button, and Toggle Button */}
        <div className="flex items-center space-x-4">
          <div className="text-white cursor-pointer">
            {/* Add your search icon component here */}
            <input type="search" name="search" id="" />
          </div>
          <button className="text-white">Sign In</button>
          <div
            className="text-white cursor-pointer md:show"
            onClick={toggleDrawer}
          >
            ☰
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isDrawerOpen && (
        <div className="md:show">
          {/* Add your mobile navigation links here */}
          <div className="text-white">Mobile Link 1</div>
          <div className="text-white">Mobile Link 2</div>
          {/* ... other mobile links */}
        </div>
      )}
    </nav>
  );
};

export default Header;
