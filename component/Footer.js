"use client";


import { useLanguage } from "@/app/Context/LanguageContext"



const Footer = () => {
  const { language } = useLanguage();
const translations ={
  en: { footer: '© 2025 SOL TOOL | ALL RIGHTS RESERVED'},
  ko: {footer: '© 2025 SOL TOOL | 모든 권리 보유'},
}
  return (
    <footer className="text-sm text-center py-5 font-medium">
      {translations[language].footer}
    </footer>
  )
}

export default Footer