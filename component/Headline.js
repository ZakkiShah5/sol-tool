"use client";
import { useLanguage } from "@/app/Context/LanguageContext"
import { useState } from "react"
import FeeModal from "./FeeModal";



const Headline = ({translations}) => {
    const { language } = useLanguage()
    const [openMod, setOpenMod] = useState(false)
    const handleMod = () => {
        setOpenMod(!openMod)
      }
  return (
    <section className='font-[Poppins] max-w-6xl py-3 px-2 mx-auto'>
        <div className='relative flex justify-between items-center'>
          <div></div>
          <button
            onClick={() => handleMod()}
            className='text-[#02CCE6] border-[#02CCE6] border rounded px-2 py-1 cursor-pointer'
          >
            {translations[language].priorityFees}
          </button>
          {openMod && <FeeModal />}
        </div>

        <div className='text-center'>
          <h1 className='gradient-text mt-3 md:mt-0 text-3xl md:text-6xl font-bold font-[DM_Sans]'>
            {translations[language].heading}
          </h1>
          <p className='px-6 mt-2 md:px-0'>{translations[language].description}</p>
        </div>
      </section>
  )
}

export default Headline