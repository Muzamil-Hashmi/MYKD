'use client'
import { navLinks } from '@/utils/navLinks';
import React, { useState } from 'react';
import "./Header.css";
import { CiSearch } from "react-icons/ci";
import { SlNote } from "react-icons/sl";



const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <>
      <div className="flex   justify-between items-center p-6 ">
        <img src="/assets/10004.png" alt="" className='w-48' />
        <div className="hidden text-lg font-bold md:flex space-x-16">
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
            <CiSearch className='font-bold' size={30} />

        </div>

        {/* Search Icon, Sign In Button, and Toggle Button */}
        <div className="flex items-center space-x-4">
          <div className="text-white cursor-pointer">
            {/* Add your search icon component here */}
          </div>
          <button className="btn btn-primary relative overflow-hidden p-5" >
            <img
              src="/assets/border.svg"
              alt="Contact us"
              className="absolute  top-0 left-0 w-full h-full
                "

            />
            <span className="relative flex justify-center items-center gap-2 text-lg z-10"> 
            <SlNote />
              SING IN</span>
          </button>
          <div
            className="text-white text-4xl cursor-pointer md:show"
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
    </>
  );
};

export default Header;
