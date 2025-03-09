'use client'

import Link from 'next/link'
import { useState } from 'react'

import { FaBars } from 'react-icons/fa6'
import { CiWallet } from 'react-icons/ci'
import { FaTelegram } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false) // For the mobile menu toggle

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev) // Toggle the mobile menu
  }

  return (
    <header className='max-w-6xl py-3 px-2 mx-auto bg-[#FCFCFD] flex justify-between items-center'>
      <Link href='/' className='flex items-center gap-2'>
        <div className='lg:hidden'>
          <button onClick={handleMenuToggle} className='text-[18px]'>
            <FaBars />
          </button>
        </div>
        <img src='logo.png' className='w-6' alt='logo' />
        <h1 className='hidden md:block text-2xl font-extrabold font-[Barlow_Condensed]'>
          Sol - Tool
        </h1>
      </Link>

      {/* Mobile menu toggle button */}

      {/* Navigation - Adjust for mobile */}
      <nav
        className={`lg:flex lg:gap-9 text-[16px] font-[Poppins] ${
          menuOpen
            ? 'flex flex-col text-center gap-2 absolute top-16 left-0 w-full bg-[#FCFCFD] '
            : 'hidden'
        }`}
      >
        <Link href='/' className='active p-2 border-[#E6E8EC] md:border-none md:p-0 border-b'>
          Creater
        </Link>
        <Link href='/mint' className='p-2 border-[#E6E8EC] md:border-none md:p-0 border-b'>
          Minting/Burn
        </Link>
        <Link href='/freeze' className='p-2 border-[#E6E8EC] md:border-none md:p-0 border-b'>
          Freezing
        </Link>
        <Link href='/meta' className='p-2 border-[#E6E8EC] md:border-none md:p-0 border-b'>
          Meta
        </Link>
        <Link href='/owner' className='p-2 border-[#E6E8EC] md:border-none md:p-0 border-b'>
          Ownership
        </Link>
      </nav>

      <div className='flex gap-3 md:gap-5 items-center'>
        <Link href='/as'>
          <FaTelegram className='text-[#25a2e0] text-xl' />
        </Link>
        <div className='relative'>
          <SlGlobe className='text-xl cursor-pointer' onClick={handleToggle} />

          {isOpen && (
            <div className='absolute bg-white text-black shadow-md rounded mt-4 w-40'>
              <ul>
                <li className='p-2 hover:bg-[#02CCE6] hover:text-white cursor-pointer'>
                  English
                </li>
                <li className='p-2 hover:bg-[#02CCE6] hover:text-white cursor-pointer'>
                  Korean
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className='cursor-pointer bg-[#02CCE6] text-white font-semibold text-sm md:text-[16px] py-2 md:py-2.5 px-2 rounded flex items-center gap-2'>
          <CiWallet />
          <span>Connect Wallet</span>
        </button>
      </div>
    </header>
  )
}

export default Header
