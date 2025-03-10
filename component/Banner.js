"use client";

import { useLanguage } from "@/app/Context/LanguageContext";

const Banner = () => {
  const { language } = useLanguage();

  const translations = {
    en: "Join us in developing the Solana project!",
    ko: "Solana 프로젝트 개발에 참여하세요!",
  };

  return (
    <div className="banner text-center py-1.5 text-white">
      {translations[language]}
    </div>
  );
};

export default Banner;
