'use client'

import Link from 'next/link'
import { useState } from 'react'

import { FaBars } from 'react-icons/fa6'
import { CiWallet } from 'react-icons/ci'
import { FaTelegram } from 'react-icons/fa'
import { SlGlobe } from 'react-icons/sl'

import { useLanguage } from '@/app/Context/LanguageContext'


const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false) 

  const { language, changeLanguage, translations } = useLanguage();

  const handleToggle = () => {
    setIsOpen(prev => !prev)
  }

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev) // Toggle the mobile menu
  }

  return (
    <header className="max-w-6xl py-3 px-2 mx-auto bg-[#FCFCFD] flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <div className="lg:hidden">
          <button onClick={handleMenuToggle} className="text-[18px]">
            <FaBars />
          </button>
        </div>
        <img src="logo.png" className="w-6" alt="logo" />
        <h1 className="hidden md:block text-2xl font-extrabold font-[Barlow_Condensed]">
          Sol - Tool
        </h1>
      </Link>

      <nav
        className={`lg:flex lg:gap-9 text-[16px] font-[Poppins] ${
          menuOpen
            ? "flex flex-col text-center gap-2 absolute top-24 left-0 w-full bg-[#FCFCFD]"
            : "hidden"
        }`}
      >
        <Link href="/" className="active p-2 border-[#E6E8EC] md:border-none md:p-0 border-b">
          {translations[language].creator}
        </Link>
        <Link href="/mint" className="p-2 border-[#E6E8EC] md:border-none md:p-0 border-b">
          {translations[language].mint}
        </Link>
        <Link href="/freeze" className="p-2 border-[#E6E8EC] md:border-none md:p-0 border-b">
          {translations[language].freeze}
        </Link>
        <Link href="/meta" className="p-2 border-[#E6E8EC] md:border-none md:p-0 border-b">
          {translations[language].meta}
        </Link>
        <Link href="/owner" className="p-2 border-[#E6E8EC] md:border-none md:p-0 border-b">
          {translations[language].owner}
        </Link>
      </nav>

      <div className="flex gap-3 md:gap-5 items-center">
        <Link href="/as">
          <FaTelegram className="text-[#25a2e0] text-xl" />
        </Link>
        <div className="relative">
          <SlGlobe className="text-xl cursor-pointer" onClick={handleToggle} />

          {isOpen && (
            <div className="absolute bg-white text-black shadow-md rounded mt-4 w-40">
              <ul>
                <li onClick={() => changeLanguage("en")} className="p-2 hover:bg-[#02CCE6] hover:text-white cursor-pointer">
                  English
                </li>
                <li onClick={() => changeLanguage("ko")} className="p-2 hover:bg-[#02CCE6] hover:text-white cursor-pointer">
                  한국어
                </li>
              </ul>
            </div>
          )}
        </div>
        <button className="cursor-pointer bg-[#02CCE6] text-white font-semibold text-sm md:text-[16px] py-2 md:py-2.5 px-2 rounded flex items-center gap-2">
          <CiWallet />
          <span>{translations[language].connectWallet}</span>
        </button>
      </div>
    </header>
  )
}

export default Header
