import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logoDIVINE from '../assets/logoDIVINE.png'
import { useUser } from '../hooks/LoggedIn'
import ShopCart from '../assets/ShopCart.png'
import  ProfileTwo from '../assets/ProfileTwo.png'

export const NavBar = () => {
    const LoggedIn = useUser();
    const [loggedIn, setLoggedIn] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLoginClick = () => {
        setLoggedIn(true); 
      };


    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen); 
      };

      return (
        <nav className="bg-[#FEFAF0] border-gray-200 dark:bg-gray-900">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img src={logoDIVINE} className="w-[12rem] self-center  whitespace-nowrap dark:text-white" alt="Logo" />
    
            <div className="flex md:order-2">
              
    
              {/* burger list */}
              <button
                type="button"
                onClick={handleMenuToggle}
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-cta"
                aria-expanded={isMenuOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                </svg>
              </button>
            </div>
    
            <div
              className={`justify-between w-full md:flex md:justify-slef-end md:w-auto md:order-1 ${
                isMenuOpen ? 'block' : 'hidden'
              }`}
              id="navbar-cta"
            >
              <ul className="flex flex-col font-medium text-sm p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-[#FEFAF0] dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <Link to='/' class="block py-2 pl-3 pr-4 text-white bg-[#5C5C42] rounded md:bg-transparent md:text-[#5C5C42] md:p-0 md:dark:text-blue-500" aria-current="page">HOME</Link>
                </li>
                <li>
                    <Link to='/shopall' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5C5C42] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">SHOP ALL</Link>
                </li>
                <li>
                    <Link to='/aboutus' class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5C5C42] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">ABOUT</Link>
                </li>
                <li>
                    <Link to='/contactus'  class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#5C5C42] md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">CONTACT US</Link>
                </li>
                <li className='md:order-last'>
                    
                </li>
                <div className='absolute right-10'>
                {loggedIn ? (
                        <div className=" flex flex-row gap-4">
                        <Link to="/shopall">
                            <img src={ShopCart} className="absolute top-1 right-12 w-6 h-6 justify-self-end hover:scale-150" alt="Shop Cart" />
                        </Link>
                        <Link to="/shopall">
                            <img src={ProfileTwo} className="w-8 h-8 justify-self-end hover:scale-150" alt="Profile" />
                        </Link>
                        </div>
                    ) : (
                        <button
                        type="button"
                        onClick={handleLoginClick}
                        className="text-white bg-[#5C5C42] hover:bg-[#FEFAF0] hover:text-[#5C5C42] font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                        SIGN UP/IN
                        </button>
                    )}
                </div>
              </ul>
            </div>
          </div>
        </nav>
      );
    }
    
