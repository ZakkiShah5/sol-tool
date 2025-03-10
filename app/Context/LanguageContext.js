"use client";
import { createContext, useContext, useState, useEffect } from "react";

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language");
    if (savedLanguage) setLanguage(savedLanguage);
  }, []);

  const translations = {
    en: {
      creator: "Creator",
      mint: "Minting/Burn",
      freeze: "Freezing",
      meta: "Meta",
      owner: "Ownership",
      connectWallet: "Connect Wallet",
    },
    ko: {
      creator: "창작자",
      mint: "발행/소각",
      freeze: "동결",
      meta: "메타",
      owner: "소유권",
      connectWallet: "지갑 연결",
    },
  };

  const changeLanguage = (lang) => {
    localStorage.setItem("language", lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
