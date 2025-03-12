'use client'

import { useState } from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'
import { IoIosInformationCircle } from 'react-icons/io'
import { FaRegSnowflake } from 'react-icons/fa'
import { useLanguage } from '@/app/Context/LanguageContext'

export default function TokenForm () {
  const [image, setImage] = useState(null)

  const { language } = useLanguage()

  const translations = {
    en: {
      name: 'Name:',
      nameplace: 'Put your name',
      symbol: 'Symbol:',
      symbolplace: 'Put the Symbol of your token',
      decimals: 'Decimals:',
      decimaldesc: 'Most meme coin use 6 decimals',
      supply: 'Supply:',
      supplydesc: 'Most meme coin use 10B',
      image: 'Image:',
      uploadImage: 'Upload Image',
      uploadImageDesc: 'Most meme coin use a squared 1000x1000 logo',
      description: 'Description:',
      descriptionDesc: 'Put the description of your Token',
      addLinks: 'Add Social Links & Tags',
      addLinksDesc: 'Add links to your token metadata',
      website: 'Website:',
      websitedesc: 'Put your Website:',
      twitter: 'Twitter:',
      twitterdesc: 'Put your Twitter:',
      telegram: 'Telegram:',
      telegramdesc: 'Put your Telegram:',
      discord: 'Discord:',
      discorddesc: 'Put your Discord:',
      advancedOptions: 'Advanced Options',
      modifyCreator: 'Modify Creator Information',
      modifyCreatorDesc: 'Change the information of the creator in the metadata, by default it is SOL TOOL.',
      revokeAuthorities: 'Revoke Authorities',
      revokeFreeze: 'Revoke Freeze',
      revokeFreezeDesc: 'Freeze Authority allows you to freeze token accounts of holders.',
      revokeMint: 'Revoke Mint',
      revokeMintDesc: 'Mint Authority allows you to mint more supply of your token.',
      revokeUpdate: 'Revoke Update',
      revokeUpdateDesc: 'Update Authority allows you to update token metadata.',
      revokeAuthoritiesDesc: 'Solana Token have 3 authorities: Freeze Authority, Mint Authority and Update Authority. Revoke them to attract more investors.',
      createToken: 'Create Token',
      totalFees: 'Total Fees :'
    },
    ko: {
      name: '이름:',
      nameplace: '이름을 입력하세요',
      symbol: '심볼:',
      symbolplace: '토큰의 심볼을 넣으세요',
      decimals: '소수점 자리:',
      decimaldesc: '대부분의 밈 코인은 소수점 6자리를 사용합니다.',
      supply: '공급량:',
      supplydesc: '대부분의 밈 코인은 10B를 사용합니다',
      image: '이미지:',
      uploadImage: '이미지 업로드',
      uploadImageDesc: '대부분의 밈 코인은 1000x1000 정사각형 로고를 사용합니다.',
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
      discord: '디스코드:',
      discorddesc: '당신의 불화를 넣어',
      advancedOptions: '고급 옵션',
      modifyCreator: '창작자 정보 수정',
      modifyCreatorDesc: '메타데이터에서 작성자의 정보를 변경합니다. 기본값은 SOL TOOL입니다.',
      revokeAuthorities: '권한 취소',
      revokeAuthoritiesDesc: '솔라나 토큰에는 3가지 권한이 있습니다: 동결 권한, 민트 권한, 업데이트 권한. 더 많은 투자자를 유치하려면 권한을 취소하세요.',
      revokeFreeze: '프리즈 권한 취소',
      revokeFreezeDesc: '동결 권한을 사용하면 토큰 보유자의 토큰 계정을 동결할 수 있습니다.',
      revokeMint: '민트 권한 취소',
      revokeMintDesc: 'Mint Authority를 ​​사용하면 더 많은 토큰을 주조할 수 있습니다.',
      revokeUpdate: '업데이트 권한 취소',
      revokeUpdateDesc: '업데이트 권한을 사용하면 토큰 메타데이터를 업데이트할 수 있습니다.',
      createToken: '토큰 생성',
      totalFees: '총 수수료 :'
    }
  }

  const handleImageUpload = event => {
    const file = event.target.files[0]
    setImage(file)
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <form className='mt-8'>
        <div className='grid md:grid-cols-2 gap-6'>
          <div className='flex flex-col'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>
              {translations[language].name}
            </label>
            <input
              type='text'
              placeholder={translations[language].nameplace}
              className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          {/* Symbol Field */}
          <div className='flex flex-col'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>
              {translations[language].symbol}
            </label>
            <input
              type='text'
              placeholder={translations[language].nameplace}
              className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          {/* Decimals Field */}
          <div className='flex flex-col'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>
              {translations[language].decimals}
            </label>
            <input
              type='number'
              defaultValue='6'
              className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <small className='text-gray-500'>
              {translations[language].decimaldesc}
            </small>
          </div>

          {/* Supply Field */}
          <div className='flex flex-col'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>
              {translations[language].supply}
            </label>
            <input
              type='number'
              defaultValue='1'
              className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <small className='text-gray-500'>
              {translations[language].supplydesc}
            </small>
          </div>
        </div>

        <div className='flex-col md:flex-row flex mt-5 justify-between gap-6'>
          <div className='flex flex-col flex-1/2'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>
              {translations[language].image}
            </label>
            <div className='border h-32 border-[#E6E8EC] p-1.5 rounded-sm flex flex-col items-center justify-center cursor-pointer'>
              <input
                type='file'
                className='hidden'
                onChange={handleImageUpload}
              />
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
        <div className='my-8 flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <h1 className='font-bold text-[16px]'>{translations[language].addLinks}</h1>
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
              <label className='text-black mb-1'>{translations[language].website}</label>
              <input
                type='text'
                placeholder={translations[language].websitedesc}
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>{translations[language].twitter}</label>
              <input
                type='text'
                placeholder={translations[language].websitedesc}
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>{translations[language].telegram}</label>
              <input
                type='text'
                placeholder={translations[language].telegramdesc}
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>{translations[language].discord}</label>
              <input
                type='text'
                placeholder={translations[language].discorddesc}
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
          </div>
        </div>

        <div className='my-8 flex flex-col gap-2'>
          <div className='flex gap-3 items-center'>
            <h1 className='gradient-text2 text-2xl'>{translations[language].advancedOptions}</h1>
            <img src='chevup.png' alt='chev' />
          </div>

          <div className='flex items-center gap-1 flex-wrap'>
            <h1 className='font-bold text-[16px]'>
              {translations[language].modifyCreator}
            </h1>
            <div className='font-bold text-[20px]'>
              <IoIosInformationCircle />
            </div>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
            <span>(0.1 SOL)</span>
          </div>
          <small className='text-gray-500'>
            {translations[language].modifyCreatorDesc}
          </small>
        </div>

        <div className='my-8 flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <h1 className='font-bold text-[16px]'>{translations[language].revokeAuthorities}</h1>
          </div>
          <small className='text-gray-500'>
            {translations[language].revokeAuthoritiesDesc}
          </small>

          <div className='flex flex-col  md:flex-row gap-6 my-6'>
            <div className='flex  rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#FCFCFD]'>
              <div className='text-18px'>
                <FaRegSnowflake />
              </div>
              <div className='text-[14px]'>
                <div className='flex justify-between items-center'>
                  <span>{translations[language].revokeFreeze}</span>
                  <span>+0.1 SOL</span>
                </div>
                <p className='text-[#777E90]'>
                  {translations[language].revokeFreezeDesc}
                </p>
              </div>
            </div>
            <div className='border-grad flex rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#ECFFFF]'>
              <div className='text-18px'>
                <img src='cancel.png' className='w-8' alt='' />
              </div>
              <div className='text-[14px]'>
                <div className='flex justify-between items-center'>
                  <span className='gradient-text2'>{translations[language].revokeMint}</span>
                  <span>+0.1 SOL</span>
                </div>
                <p className='text-[#777E90]'>
                {translations[language].revokeMintDesc}
                </p>
              </div>
            </div>
            <div className='border-grad flex rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#ECFFFF]'>
              <div className='text-18px'>
                <img src='lock.png' className='w-8' alt='' />
              </div>
              <div className='text-[14px]'>
                <div className='flex justify-between items-center'>
                  <span className='gradient-text2'>{translations[language].revokeUpdate}</span>
                  <span>+0.1 SOL</span>
                </div>
                <p className='text-[#777E90]'>
                {translations[language].revokeUpdateDesc}
                </p>
              </div>
            </div>
          </div>

          <div className='text-center'>
            <button className='bg-[#02CCE6] cursor-pointer px-4 rounded text-white py-2'>
              {translations[language].createToken}
            </button>
            <div className='mt-3 text-sm'>
              {translations[language].totalFees} <span className='text-[#02CCE6]'>0.20 SOL</span>{' '}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
