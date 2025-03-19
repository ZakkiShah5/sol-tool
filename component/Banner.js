"use client";

import { useLanguage } from "@/app/Context/LanguageContext";
import Link from "next/link";

const Banner = () => {
  const { language } = useLanguage();

  const translations = {
    en: "Join us in developing the Solana project!",
    ko: "Solana 프로젝트 개발에 참여하세요!",
  };

  return (
    <div className="banner text-center py-1.5 text-white">
      <Link href='/development'>{translations[language]}</Link>
    </div>
  );
};

export default Banner;
