
"use client";

import Header from "@/component/Header";
import Banner from "../component/Banner";
import TokenForm from "@/component/TokenForm";
import LiquidityPool from "@/component/LiquidityPool";
import Faq from "@/component/Faq";
import Footer from "@/component/Footer";
import { useLanguage } from "./Context/LanguageContext";

export default function Home() {
  const { language } = useLanguage();

  const translations = {
    en: {
      priorityFees: "Priority Fees",
      heading: "Solana Token Creator",
      description: "Easily Create your own Solana SPL Token in just 7+1 steps without Coding.",
    },
    ko: {
      priorityFees: "우선 요금",
      heading: "Solana 토큰 생성기",
      description: "코딩 없이 7+1 단계만으로 Solana SPL 토큰을 쉽게 생성하세요.",
    },
  };
  return (
    <>
     <Header />
     <Banner />
     <section className="font-[Poppins] max-w-6xl py-3 px-2 mx-auto">
      <div className="flex justify-between items-center">
        <div></div>
        <button className="text-[#02CCE6] border-[#02CCE6] border rounded px-2 py-1 cursor-pointer">
          {translations[language].priorityFees}
        </button>
      </div>

      <div className="text-center">
        <h1 className="gradient-text mt-3 md:mt-0 text-3xl md:text-6xl font-bold font-[DM_Sans]">
          {translations[language].heading}
        </h1>
        <p className="px-6 md:px-0">{translations[language].description}</p>
      </div>
    </section>
     <TokenForm />
     <LiquidityPool />
     <Faq />
     <Footer />
    </>
  );
}
