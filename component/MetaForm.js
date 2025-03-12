'use client'
import { MdOutlineFileUpload } from 'react-icons/md'
import { useLanguage } from '@/app/Context/LanguageContext'
import { IoIosInformationCircle } from 'react-icons/io'

const MetaForm = () => {
  const { language } = useLanguage()
  const translations = {
    en: {
      tokenAddress: 'Token Address:',
      enterAddress: 'Enter Address',
      ownershipConfirmed: 'Ownership has not been Confirmed',
      image: 'Image:',
      uploadImage: 'Upload Image',
      uploadImageDesc: '128x128 pixels,100KB or less, png file',
      description: 'Description:',
      descriptionDesc: 'Put the description of your Token',
      check: 'Check',
      addLinks: 'Add Social Links & Tags',
      addLinksDesc: 'Add links to your token metadata',
      website: 'Website:',
      websitedesc: 'Put your Website:',
      twitter: 'Twitter:',
      twitterdesc: 'Put your Twitter:',
      telegram: 'Telegram:',
      telegramdesc: 'Put your Telegram:',
      discord: 'Discord:',
      update: 'Update',
      fee: 'Fee',
      discorddesc: 'Put your Discord:'
    },
    ko: {
      tokenAddress: '토큰 주소:',
      enterAddress: '주소 입력',
      ownershipConfirmed: '소유권이 확인되지 않았습니다',
      check: '확인',
      image: '이미지:',
      uploadImage: '이미지 업로드',
      uploadImageDesc: '128x128픽셀, 100KB 이하, png 파일.',
      description: '설명:',
      descriptionDesc: '토큰에 대한 설명을 입력하세요',
      addLinks: '소셜 링크 및 태그 추가',
      addLinksDesc: '토큰 메타데이터에 링크 추가',
      website: '웹사이트:',
      websitedesc: '귀하의 웹사이트를 넣으세요',
      twitter: '트위터:',
      twitterdesc: '트위터를 넣어주세요',
      telegram: '텔레그램:',
      telegramdesc: '전보를 넣어',
      update: '업데이트',
      fee: '수수료',
      discord: '디스코드:',
      discorddesc: '당신의 불화를 넣어'
    }
  }
  return (
    <section className='max-w-4xl mx-auto p-6'>
      <form className='flex flex-col gap-10'>
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
              <small className='text-[#FF6838] font-semibold'>
                {translations[language].ownershipConfirmed}
              </small>
            </div>
            <button className='md:flex-1/12 md:self-start cursor-pointer bg-[#02CCE6] text-white py-2 px-5 rounded'>
              {translations[language].check}
            </button>
          </div>
        </div>

        <div className='flex-col md:flex-row flex justify-between gap-6'>
          <div className='flex flex-col flex-1/2'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>
              {translations[language].image}
            </label>
            <div className='border h-32 border-[#E6E8EC] p-1.5 rounded-sm flex flex-col items-center justify-center cursor-pointer'>
              <input type='file' className='hidden' />
              <div className='text-3xl text-[#02CCE6]'>
                <MdOutlineFileUpload />
              </div>
              <div>{translations[language].uploadImage}</div>
            </div>
            <small className='text-gray-500'>
              {translations[language].uploadImageDesc}
            </small>
          </div>

          {/* Description Field */}
          <div className='flex flex-col flex-1/2'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>
              {translations[language].description}
            </label>
            <textarea
              placeholder={translations[language].descriptionDesc}
              className='border resize-none h-32 border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            ></textarea>
          </div>
        </div>

        <div className=' flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <h1 className='font-bold text-[16px]'>
              {translations[language].addLinks}
            </h1>
            <div className='font-bold text-[20px]'>
              <IoIosInformationCircle />
            </div>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
          </div>
          <small className='text-gray-500'>
            {translations[language].addLinksDesc}
          </small>
          <div className='flex-col md:flex-row flex md:items-center justify-between gap-5'>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>
                {translations[language].website}
              </label>
              <input
                type='text'
                placeholder={translations[language].websitedesc}
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>
                {translations[language].twitter}
              </label>
              <input
                type='text'
                placeholder={translations[language].websitedesc}
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>
                {translations[language].telegram}
              </label>
              <input
                type='text'
                placeholder={translations[language].telegramdesc}
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>
                {translations[language].discord}
              </label>
              <input
                type='text'
                placeholder={translations[language].discorddesc}
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
          </div>
        </div>

        <div className='text-center'>
          <div className='mt-3 text-sm flex gap-2 justify-center items-center text-gray-400'>
            {translations[language].fee}
            <span className=''>0.20 SOL</span>
          </div>
          <button className='bg-[#02CCE6] cursor-pointer px-12 mt-2 rounded text-white py-2'>
            {translations[language].update}
          </button>
        </div>
      </form>
    </section>
  )
}

export default MetaForm
