import { useLanguage } from "@/app/Context/LanguageContext";
import { FaTelegramPlane } from "react-icons/fa";

const FeeModal = () => {
  const { language } = useLanguage();

  // Texts for English and Korean
  const texts = {
    en: {
      title: "Use Priority Fees",
      description: "Modify the fees you pay within SOL TOOL in order to avoid Transactions error due to Solana congestion.",
      priorityLevel: "Priority Level",
      fast: "Fast 1x",
      turbo: "Turbo 2x",
      ultra: "Ultra 3x",
      note: "Consider that priority fees generally facilitate sending transactions to the network, but their effectiveness is contingent upon the current status of the network.",
    },
    ko: {
      title: "우선 요금 사용",
      description: "Solana 네트워크 혼잡으로 인한 거래 오류를 피하기 위해 SOL TOOL 내에서 지불하는 요금을 수정하십시오.",
      priorityLevel: "우선 순위 수준",
      fast: "빠름 1x",
      turbo: "터보 2x",
      ultra: "초고속 3x",
      note: "우선 요금은 일반적으로 네트워크에 거래를 보내는 것을 용이하게 하지만, 그 효과는 네트워크의 현재 상태에 따라 달라집니다.",
    },
  };

  const currentText = texts[language];

  return (
    <section className="flex flex-col gap-2 bg-[#fcfcfd] md:w-[400px] h-auto rounded border z-10 border-[#E6E8EC] p-4 absolute right-0 top-10">
      <h1 className="text-2xl font-bold">{currentText.title}</h1>
      <p className="text-sm">{currentText.description}</p>
      <div className="flex items-center gap-3">
        <h2 className="font-semibold">{currentText.priorityLevel}</h2>
        <span>
          <FaTelegramPlane />
        </span>
      </div>
      <div className="flex justify-around items-center py-2 px-3 border border-[#A3F7FE] bg-[#ECFFFF] rounded-xl">
        <span>{currentText.fast}</span>
        <span className="bg-[#fff] py-1.5 px-4 rounded-xl border-grad2">{currentText.turbo}</span>
        <span>{currentText.ultra}</span>
      </div>
      <p className="text-sm">{currentText.note}</p>
    </section>
  );
};

export default FeeModal;
