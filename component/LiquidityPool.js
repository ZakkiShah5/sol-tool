import { FaMagnifyingGlass } from 'react-icons/fa6';
import { useLanguage } from '@/app/Context/LanguageContext';

const LiquidityPool = () => {
  const { language } = useLanguage();

  const translations = {
    en: {
      createLiquidityPool: "Wants to create a Liquidity Pool?",
      createHere: "Create it Here",
      goingToCreate: "Are you going to Create a Liquidity Pool?",
      createInfo: "If you want to create a liquidity pool you will need to Revoke Freeze Authority of the Token. You can also Revoke the Mint Authority to get the people reliability. You can do both here, each one costs 0.1 SOL.",
      connectWallet: "Connect your wallet please.",
      revokeFreeze: "Revoke Freeze Authority",
      revokeMint: "Revoke Mint Authority",
    },
    ko: {
      createLiquidityPool: "유동성 풀을 만들고 싶으신가요?",
      createHere: "여기에서 생성하세요",
      goingToCreate: "유동성 풀을 생성하시겠습니까?",
      createInfo: "유동성 풀을 생성하려면 토큰의 동결 권한을 취소해야 합니다. 또한, 민트 권한을 취소하면 신뢰성을 높일 수 있습니다. 여기에서 두 가지 작업을 수행할 수 있으며, 각각 0.1 SOL이 필요합니다.",
      connectWallet: "지갑을 연결해 주세요.",
      revokeFreeze: "동결 권한 취소",
      revokeMint: "민트 권한 취소",
    },
  };

  return (
    <section className='max-w-4xl mx-auto p-6 font-[Poppins]'>
      <div className='border-grad flex flex-col md:flex-row justify-center items-center gap-3 border-[#E6E8EC] border-2 p-3 text-center font-normal bg-[#ECFFFF]'>
        <p>{translations[language].createLiquidityPool}</p>
        <span className='text-[#02CCE6] cursor-pointer'>{translations[language].createHere}</span>
      </div>

      <div className='my-5 flex gap-4 flex-col bg-[#ECFFFF] border-[#02CCE6] border-2 rounded p-5 md:py-14 md:px-20'>
        <h1 className='text-xl font-semibold '>
          {translations[language].goingToCreate}
        </h1>
        <p>
          {translations[language].createInfo}
        </p>
        <div className='border-grad flex items-center gap-6 py-2 px-4'>
          <FaMagnifyingGlass />
          <p className='font-medium text-sm '>{translations[language].connectWallet}</p>
        </div>
        <div className='mt-5 flex flex-col md:flex-row gap-5 justify-between items-center'>
          <button className='w-[100%] cursor-pointer py-2 px-10 rounded text-white bg-[#02CCE6]'>
            {translations[language].revokeFreeze}
          </button>
          <button className='w-[100%] cursor-pointer py-2 px-10 rounded text-white bg-[#02CCE6]'>
            {translations[language].revokeMint}
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiquidityPool;