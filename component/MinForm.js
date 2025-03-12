'use client'

import { useLanguage } from '@/app/Context/LanguageContext'

const MinForm = () => {
  const {language} = useLanguage()
  const translations = {
    en: {
      tokenAddress: 'Token Address:',
      enterAddress: 'Enter Address',
      ownershipConfirmed: 'Ownership has been Confirmed',
      check: 'Check',
      amount: 'Amount:',
      enterAmount: 'Enter Amount',
      minting: 'Minting',
      bin: 'Bin',
      fee: 'Fee 0.1SOL',
      mintingOwnership: 'Minting Ownership:',
      enterID: 'Enter ID',
      deletesMintingAuthority:
        'Deletes the authority to issue additional information.',
      revocation: 'Revocation',
      burnOwnership: 'Burn Ownership:',
      removesBurnPermission: 'Removes permission to burn tokens.'
    },
    ko: {
      tokenAddress: '토큰 주소:',
      enterAddress: '주소 입력',
      ownershipConfirmed: '소유권이 확인되었습니다',
      check: '확인',
      amount: '수량:',
      enterAmount: '수량 입력',
      minting: '민팅',
      bin: '휴지통',
      fee: '수수료 0.1SOL',
      mintingOwnership: '민팅 소유권:',
      enterID: 'ID 입력',
      deletesMintingAuthority: '추가 발행 권한을 삭제합니다.',
      revocation: '폐지',
      burnOwnership: '소각 소유권:',
      removesBurnPermission: '토큰 소각 권한을 제거합니다.'
    }
  }
  return (
    <section className='max-w-3xl mx-auto p-6'>
      <form className='flex flex-col gap-5'>
        <div>
          <label htmlFor='taddress'>{translations[language].tokenAddress} </label>
          <div className='flex flex-col md:flex-row mt-1 justify-between gap-2 md:gap-5'>
            <div className='md:flex-1/3 flex flex-col'>
              <input
                className='border border-[#E6E8EC] rounded px-2 py-2'
                type='text'
                placeholder={translations[language].enterAddress}
              />
              <small className='text-[#58BD7D]'>
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
              {translations[language].amount}
            </label>
          </div>
          <div className='flex flex-col md:flex-row md:justify-between gap-2 md:gap-5 md:items-end'>
            <input
              className='border flex-1/3 border-[#E6E8EC] rounded px-2 py-2'
              type='text'
              placeholder={translations[language].enterAmount}
            />
            <div className='flex-1/12 items-center md:items-stretch gap-2 flex md:flex-col-reverse md:gap-1 justify-between'>
              <button className='flex-1/3 md:flex-1 cursor-pointer bg-[#02CCE6] text-white py-2 px-5 rounded'>
                {translations[language].minting}
              </button>
              <small className='text-gray-500 text-center'>{translations[language].fee}</small>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor='taddress' className='flex-1/3'>
              {translations[language].amount}
            </label>
          </div>
          <div className='flex flex-col md:flex-row md:justify-between gap-2 md:gap-5 md:items-end'>
            <input
              className='border flex-1/3 border-[#E6E8EC] rounded px-2 py-2'
              type='text'
              placeholder={translations[language].enterAmount}
            />
            <div className='flex-1/12 items-center md:items-stretch gap-2 flex md:flex-col-reverse md:gap-1 justify-between'>
              <button className='flex-1/3 md:flex-1 cursor-pointer bg-[#02CCE6] text-white py-2 px-5 rounded'>
                {translations[language].bin}
              </button>
              <small className='text-gray-500 text-center'>{translations[language].fee}</small>
            </div>
          </div>
        </div>
        <div>
          <div>
            <label htmlFor='taddress' className='flex-1/3'>
              {translations[language].mintingOwnership}
            </label>
          </div>
          <div className=' flex flex-col md:flex-row md:justify-between gap-2 md:gap-5 md:items-end'>
            <input
              className='border flex-1/3 border-[#E6E8EC] rounded px-2 py-2'
              type='text'
              placeholder={translations[language].enterID}
            />
            <small className='text-gray-500 md:hidden'>
              {translations[language].deletesMintingAuthority}
            </small>

            <div className=' flex-1/12 items-center md:items-stretch gap-2 flex md:flex-col-reverse md:gap-1 justify-between'>
              <button className='flex-1/3 md:flex-1 cursor-pointer bg-[#02CCE6] text-white py-2 px-5 rounded'>
                {translations[language].revocation}
              </button>
              <small className='text-gray-500 text-center'>{translations[language].fee}</small>
            </div>
          </div>
          <small className='text-gray-500 hidden md:block'>
            {translations[language].deletesMintingAuthority}
          </small>
        </div>
        <div>
          <div>
            <label htmlFor='taddress' className='flex-1/3'>
              {translations[language].burnOwnership}
            </label>
          </div>
          <div className='flex flex-col md:flex-row md:justify-between gap-2 md:gap-5 md:items-end'>
            <input
              className='border flex-1/3 border-[#E6E8EC] rounded px-2 py-2'
              type='text'
              placeholder={translations[language].enterID}
            />
            <small className='md:hidden text-gray-500'>
              {translations[language].removesBurnPermission}
            </small>
            <div className='flex-1/12 items-center md:items-stretch gap-2 flex md:flex-col-reverse md:gap-1 justify-between'>
              <button className='flex-1/3 md:flex-1 cursor-pointer bg-[#02CCE6] text-white py-2 px-5 rounded'>
                {translations[language].revocation}
              </button>
              <small className='text-gray-500 text-center'>{translations[language].fee}</small>
            </div>
          </div>
          <small className='text-gray-500 hidden md:block'>
            {translations[language].removesBurnPermission}
          </small>
        </div>
      </form>
    </section>
  )
}

export default MinForm
