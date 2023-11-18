import React from 'react'
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";
// import { FiFacebook } from "react-icons/fi";
import { FaTelegramPlane } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";


// 

const Footer = () => {
  return (
    <div>


      <footer className="foote flex  justify-between p-10 bg-base-200 text-base-content">
        <nav>
          <img src="/assets/10004.png" alt="" className='w-48 pb-5 ' />
          <a className="link link-hover   text-gray-500  hover:text-green-400">Lorem ipsum dolor sitamet consectur <br /> adipiscing Duis esollici  tudin augue euismod. <br /> Nulla ullam dolor sitamet consectetur</a>
          <p className='font-bold my-3 flex gap-2'>ACTIVE <span className='text-green-500 items-center flex'>WITH US <MdKeyboardDoubleArrowRight size={25} />
          </span> </p>
          <div className='flex gap-4'>
            <FiTwitter size={25} />
            <FiFacebook size={25} />
            <FiInstagram size={25} />
            <FaTelegramPlane size={25} />



          </div>

        </nav>
        <nav>
          <ul className="footer-title text-lg list-none">
            <h1 className='font-bold text-xl pb-5'>QUICK LINK</h1>
            <li className="link link-hover text-gray-500  hover:text-green-400">Gaming</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">Product</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">All NFTs</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">Social Network</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">Domain Names</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">Collectibles</li>
          </ul>
        </nav>

        <nav>
          <ul className="footer-title text-lg list-none">
            <h1 className='font-bold text-xl pb-5'>SUPPORTS</h1>
            <li className="link link-hover text-gray-500  hover:text-green-400">Setting & Privacy</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">Help & Support</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">Live Auctions</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">Item Details</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">24/7 Supports</li>
            <li className="link link-hover text-gray-500  hover:text-green-400">Our News</li>
          </ul>
        </nav>
        <form>
          <header className="footer-title font-bold text-xl">NEWSLETTER</header>
          <fieldset className="form-control my-5 w-80">
            <label className="label">
              <span className="label-text  text-gray-500  hover:text-green-400">Subscribe our newsletter to get our latest update & newsconsectetur</span>
            </label>
            <div className="join">

            </div>
          </fieldset>
          
          <p className=' ps-2 bg-gray-700 rounded-md flex justify-between items-center text-gray-200'>Get News & Updates <span className='border p-3 rounded-md bg-green-400 hover:bg-yellow-400'> <FaPlay  size={30}/></span>

</p>
        </form>
      </footer>
    </div>
  )
}

export default Footer