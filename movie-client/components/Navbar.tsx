import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link'
import { BellIcon, MagnifyingGlassIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import NavbarItem from './NabarItem';
import { useRouter } from 'next/router';

const TOP_OFFSET = 66;

const Navbar = () => {
  const router = useRouter();
//   const [showAccountMenu, setShowAccountMenu] = useState(false);
//   const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY)
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true)
      } else {
        setShowBackground(false)
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, []);

 

 

  return (
    <nav className="w-full fixed z-40">
      <div className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${showBackground ? 'bg-zinc-900 bg-opacity-90' : ''}`}>
        <img src="/images/1.png" className="h-4 lg:h-7" alt="Logo" />
        <div className="flex-row ml-8 gap-7 hidden lg:flex">
        <Link href="/createMovie">
          <span className='cursor-pointer'>
          <NavbarItem   label="Add Movie" />
          </span>
          </Link>
         
        </div>
       
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <MagnifyingGlassIcon className="w-6" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <BellIcon className="w-6" />
          </div>
          <div  className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              <img src="/images/default-blue.png" alt="" />
            </div>
            <ChevronDownIcon className={`w-4 text-white fill-white transition`} />
            {/* <AccountMenu visible={showAccountMenu} /> */}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;