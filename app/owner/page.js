'use client'

import Banner from '@/component/Banner'
import Header from '@/component/Header'
import Headline from '@/component/Headline'
import { useLanguage } from '../Context/LanguageContext'
import Footer from '@/component/Footer'

const Page = () => {
  const { language } = useLanguage()
  const translations = {
    en: {
      priorityFees: 'Priority Fees',
      heading: 'Ownership',
      tokenAddress: 'Token Address:',
      enterAddress: 'Enter Address',
      ownershipConfirmed: 'Ownership has not been Confirmed',
      check: 'Check',
      ownership: 'Freeze Ownership:',
      enterId: 'Enter ID',
      fee: 'Fee 0.1SOL',
      updateOwn: 'Update Ownership',
      lastdesc: 'All rights to the token are transferred.',
      description:
        'Easily Create your own Solana SPL Token in just 7+1 steps without Coding.'
    },
    ko: {
      priorityFees: '소유권',
      ownership: '소유권 동결',
      heading: '메타',
      tokenAddress: '토큰 주소:',
      enterAddress: '주소 입력',
      ownershipConfirmed: '소유권이 확인되지 않았습니다',
      check: '확인',
      enterId: '아이디를 입력하세요',
      updateOwn: '소유권 업데이트',
      fee: '요금 0.1SOL',
      lastdesc: '토큰에 대한 모든 권리가 양도됩니다.',
      description:
        '코딩 없이 7+1단계 만으로 손쉽게 Solana SPL 토큰을 만들어보세요.'
    }
  }
  return (
    <>
      <Header />
      <Banner />
      <Headline translations={translations} />
      <section className='max-w-3xl mx-auto p-6'>
        <form className='flex flex-col gap-8'>
          <div>
            <label htmlFor='taddress'>
              {translations[language].tokenAddress}
            </label>
            <div className='flex flex-col md:flex-row mt-1 justify-between gap-2 md:gap-5'>
              <div className='md:flex-1/3 flex flex-col'>
                <input
                  className='border border-[#E6E8EC] rounded px-2 py-2'
                  type='text'
                  placeholder={translations[language].enterAddress}
                />
                <small className='text-[#FF6838] mt-2 font-semibold'>
                  {translations[language].ownershipConfirmed}
                </small>
              </div>
              <button className='md:flex-1/12 md:self-start cursor-pointer bg-[#02CCE6] text-white py-2 px-5 rounded'>
                {translations[language].check}
              </button>
            </div>
          </div>
          <div>
            <div>
              <label htmlFor='taddress' className='flex-1/3'>
                {translations[language].ownership}
              </label>
            </div>
            <div className='flex flex-col md:flex-row md:justify-between gap-2 md:gap-5 md:items-end'>
              <input
                className='border flex-1/3 border-[#E6E8EC] rounded px-2 py-2'
                type='text'
                placeholder={translations[language].enterId}
              />
              <small className='md:hidden text-gray-500'>
                {translations[language].lastdesc}
              </small>
              <div className='flex-1/12 items-center md:items-stretch gap-2 flex md:flex-col-reverse md:gap-1 justify-between'>
                <button className='flex-1/3 md:flex-1 cursor-pointer bg-[#02CCE6] text-white py-2 px-5 rounded'>
                  {translations[language].updateOwn}
                </button>
                <small className='text-gray-500 text-center'>
                  {translations[language].fee}
                </small>
              </div>
            </div>
            <small className='text-gray-500 hidden md:block'>
              {translations[language].lastdesc}
            </small>
          </div>
        </form>
      </section>
      <Footer />
    </>
  )
}

export default Page
