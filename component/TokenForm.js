'use client'

import { LuRefreshCw } from 'react-icons/lu'
import { IoFlashOutline } from 'react-icons/io5'
import { useState } from 'react'
import { TiCancel } from 'react-icons/ti'
import { MdOutlineFileUpload } from 'react-icons/md'
import { IoIosInformationCircle } from 'react-icons/io'
import { FaRegSnowflake, FaLock } from 'react-icons/fa'
import { BsGlobe2 } from 'react-icons/bs'
import { FaRegClock } from 'react-icons/fa6'

import { useLanguage } from '@/app/Context/LanguageContext'
import AllModal from './AllModal'

export default function TokenForm ({ openModal, setOpenModal }) {
  const [image, setImage] = useState(null)
  const [socialSwitch, setSocialSwitch] = useState(true)
  const [advacneSwitch, setAdvanceSwitch] = useState(false)
  const [freeze, setFreeze] = useState(false)
  const [mint, setMint] = useState(true)
  const [update, setUpdate] = useState(true)
  const [isChecked, setIsChecked] = useState(true)
  const [isCheck, setIsCheck] = useState(false)
  const [showPersonal, setShowPersonal] = useState(false)
  const [deletion, setDeletion] = useState(true)

  const [activeOption, setActiveOption] = useState('sol'); 

  const { language } = useLanguage()

  const translations = {
    en: {
      name: 'Name:',
      enadd: 'Enter Address',
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
      modifyCreatorDesc:
        'Change the information of the creator in the metadata, by default it is SOL TOOL.',
      revokeAuthorities: 'Revoke Authorities',
      revokeFreeze: 'Revoke Freeze',
      revokeFreezeDesc:
        'Freeze Authority allows you to freeze token accounts of holders.',
      revokeMint: 'Revoke Mint',
      revokeMintDesc:
        'Mint Authority allows you to mint more supply of your token.',
      revokeUpdate: 'Revoke Update',
      revokeUpdateDesc: 'Update Authority allows you to update token metadata.',
      revokeAuthoritiesDesc:
        'Solana Token have 3 authorities: Freeze Authority, Mint Authority and Update Authority. Revoke them to attract more investors.',
      createToken: 'Create Token',
      totalFees: 'Total Fees :',
      creatorName: 'Creator Name:',
      creatorWeb: 'Creator Website:',
      createNamePlace: 'CoinFactory',
      createWebPlace: 'https://coinfactory.app',
      personalization: 'Personalization',
      claim: 'Claim a custom address',
      personalize:
        'Personalize your token contract address by customizing the beginning or end-stand out with a unique touch! ',
      prefix: 'Prefix',
      suffix: 'Suffix',
      max4: 'Max 4',
      enable: 'Enable',
      pump: '...PUMP',
      pumpfront: 'PUMP...',
      addGen: 'The address has not been generated yet',
      gend: 'Generate Address',
      paraprocess:
        'Processing time! in some cases, generating a 4-characher address may take up to 1 hour.',
      accdel: 'Account Deletion Fee Refund Designation',
      accdesc:
        "When a token account is deleted from the user's wallet, specify the wallet to which the deposit will be refunded",
      soltool: 'SOL Tool',
      accOwner: 'Account owner',
      tokenCreator: 'Token Creator',
      customAddress: 'Custom Address',
    },
    ko: {
      soltool: 'SOL 도구',
      tokenCreator: '토큰 생성자',
      customAddress: '사용자 정의 주소',
      accOwner: '계정 소유자',
      name: '이름:',
      enadd: '주소를 입력하세요',
      nameplace: '이름을 입력하세요',
      symbol: '심볼:',
      symbolplace: '토큰의 심볼을 넣으세요',
      decimals: '소수점 자리:',
      decimaldesc: '대부분의 밈 코인은 소수점 6자리를 사용합니다.',
      supply: '공급량:',
      supplydesc: '대부분의 밈 코인은 10B를 사용합니다',
      image: '이미지:',
      uploadImage: '이미지 업로드',
      uploadImageDesc:
        '대부분의 밈 코인은 1000x1000 정사각형 로고를 사용합니다.',
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
      modifyCreatorDesc:
        '메타데이터에서 작성자의 정보를 변경합니다. 기본값은 SOL TOOL입니다.',
      revokeAuthorities: '권한 취소',
      revokeAuthoritiesDesc:
        '솔라나 토큰에는 3가지 권한이 있습니다: 동결 권한, 민트 권한, 업데이트 권한. 더 많은 투자자를 유치하려면 권한을 취소하세요.',
      revokeFreeze: '프리즈 권한 취소',
      revokeFreezeDesc:
        '동결 권한을 사용하면 토큰 보유자의 토큰 계정을 동결할 수 있습니다.',
      revokeMint: '민트 권한 취소',
      revokeMintDesc:
        'Mint Authority를 ​​사용하면 더 많은 토큰을 주조할 수 있습니다.',
      revokeUpdate: '업데이트 권한 취소',
      revokeUpdateDesc:
        '업데이트 권한을 사용하면 토큰 메타데이터를 업데이트할 수 있습니다.',
      createToken: '토큰 생성',
      totalFees: '총 수수료 :',
      creatorName: '작성자 이름',
      creatorWeb: '제작자 웹사이트',
      createNamePlace: 'CoinFactory',
      createWebPlace: 'https://coinfactory.app',
      personalization: '개인화',
      claim: '사용자 정의 주소 청구',
      personalize:
        '토큰 계약 주소를 시작이나 끝 부분을 맞춤 설정하여 개인화하고 독특한 터치로 돋보이게 하세요!',
      prefix: '접두사',
      suffix: '접미사',
      max4: '최대 4개',
      enable: '~할 수 있게 하다',
      pump: '...품다',
      pumpfront: '품다...',
      addGen: '아직 주소가 생성되지 않았습니다',
      gend: '주소 생성',
      paraprocess:
        '처리 시간! 어떤 경우에는 4자리 주소를 생성하는 데 최대 1시간이 걸릴 수 있습니다.',
      accdel: '계정 삭제 수수료 환불 지정',
      accdesc:
        '사용자 지갑에서 토큰 계정이 삭제되는 경우, 입금금이 환불될 지갑을 지정해주세요.'
    }
  }

  const handleImageUpload = event => {
    const file = event.target.files[0]
    setImage(file)
  }

  const handleSubmit = e => {
    e.preventDefault()
    setOpenModal(true)
  }

  const handleSocialSwitch = () => {
    setSocialSwitch(prev => !prev)
  }
  const handleAdvanceSwitch = () => {
    setAdvanceSwitch(prev => !prev)
  }
  const handleFreeze = () => {
    setFreeze(prev => !prev)
  }
  const handleMint = () => {
    setMint(prev => !prev)
  }
  const handleUpdate = () => {
    setUpdate(prev => !prev)
  }
  return (
    <div className='max-w-4xl mx-auto p-6'>
      <div className=''>
        {openModal && <AllModal setOpenModal={setOpenModal} />}
      </div>
      <form onSubmit={handleSubmit} className='mt-8'>
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
            <h1 className='font-bold text-[16px]'>
              {translations[language].addLinks}
            </h1>
            <div className='font-bold text-[20px]'>
              <IoIosInformationCircle />
            </div>
            <label className='switch'>
              <input
                type='checkbox'
                checked={socialSwitch}
                onChange={handleSocialSwitch}
              />
              <span className='slider'></span>
            </label>
          </div>
          {socialSwitch && (
            <>
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
            </>
          )}
        </div>

        <div className='my-8 flex flex-col gap-2'>
          <div className='flex gap-3 items-center'>
            <h1 className='gradient-text2 text-2xl'>
              {translations[language].advancedOptions}
            </h1>
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
              <input
                type='checkbox'
                checked={advacneSwitch}
                onChange={handleAdvanceSwitch}
              />
              <span className='slider'></span>
            </label>
            <span>(0.1 SOL)</span>
          </div>

          {advacneSwitch && (
            <>
              <small className='text-gray-500'>
                {translations[language].modifyCreatorDesc}
              </small>

              <div className='grid md:grid-cols-2 gap-6'>
                <div className='flex flex-col'>
                  <label className='text-black mb-1'>
                    {translations[language].creatorName}
                  </label>
                  <input
                    type='text'
                    placeholder={translations[language].createNamePlace}
                    className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                  />
                </div>

                <div className='flex flex-col'>
                  <label className='text-black mb-1'>
                    {translations[language].creatorWeb}
                  </label>
                  <input
                    type='text'
                    placeholder={translations[language].createWebPlace}
                    className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
                  />
                </div>
              </div>

              <div className='flex items-center gap-5'>
                <label className='switch'>
                  <input type='checkbox' />
                  <span className='slider'></span>
                </label>
                <p className='text-sm font-semibold '>
                  Remove creator information
                </p>
              </div>
            </>
          )}
        </div>

        <div className='my-8 flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <h1 className='font-bold text-[16px]'>
              {translations[language].revokeAuthorities}
            </h1>
          </div>
          <small className='text-gray-500'>
            {translations[language].revokeAuthoritiesDesc}
          </small>

          <div className='flex flex-col  md:flex-row gap-6 my-6'>
            <div
              className={`${
                freeze ? 'border-grad' : ''
              } flex relative rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#FCFCFD]`}
            >
              <div className='absolute top-1 right-2'>
                <label className='switch-2 absolute top-0 right-2'>
                  <input
                    type='checkbox'
                    checked={freeze}
                    onChange={handleFreeze}
                  />
                  <span className='slider'></span>
                </label>
              </div>
              <div className='icon-grad'>
                {freeze ? (
                  <FaRegSnowflake color=' rgba(0, 181, 205, 1)' size={20} />
                ) : (
                  <FaRegSnowflake size={20} />
                )}
              </div>
              <div className='text-[14px]'>
                <div className='flex justify-between items-center'>
                  <span className={`${freeze ? 'gradient-text2' : ''}`}>
                    {translations[language].revokeFreeze}
                  </span>
                  <span>+0.1 SOL</span>
                </div>
                <p className='text-[#777E90]'>
                  {translations[language].revokeFreezeDesc}
                </p>
              </div>
            </div>
            <div
              className={`${
                mint ? 'border-grad' : ''
              } flex relative rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#FCFCFD]`}
            >
              <div className='absolute top-1 right-2'>
                <label className='switch-2 absolute top-0 right-2'>
                  <input type='checkbox' checked={mint} onChange={handleMint} />
                  <span className='slider'></span>
                </label>
              </div>
              <div className='text-18px'>
                {mint ? (
                  <TiCancel size={24} color=' rgba(0, 181, 205, 1)' />
                ) : (
                  <TiCancel size={24} />
                )}
              </div>
              <div className='text-[14px]'>
                <div className='flex justify-between items-center'>
                  <span className={`${mint ? 'gradient-text2' : ''}`}>
                    {translations[language].revokeMint}
                  </span>
                  <span>+0.1 SOL</span>
                </div>
                <p className='text-[#777E90]'>
                  {translations[language].revokeMintDesc}
                </p>
              </div>
            </div>
            <div
              className={`${
                update ? 'border-grad' : ''
              } flex relative rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#FCFCFD]`}
            >
              <div className='absolute top-1 right-2'>
                <label className='switch-2 absolute top-0 right-2'>
                  <input
                    type='checkbox'
                    checked={update}
                    onChange={handleUpdate}
                  />
                  <span
                    className='slider'
                    checked={update}
                    onChange={handleUpdate}
                  ></span>
                </label>
              </div>
              <div className='text-18px'>
                {update ? (
                  <FaLock size={20} color=' rgba(0, 181, 205, 1)' />
                ) : (
                  <FaLock size={20} />
                )}
              </div>
              <div className='text-[14px]'>
                <div className='flex justify-between items-center'>
                  <span className={`${update ? 'gradient-text2' : ''}`}>
                    {translations[language].revokeUpdate}
                  </span>
                  <span>+0.1 SOL</span>
                </div>
                <p className='text-[#777E90]'>
                  {translations[language].revokeUpdateDesc}
                </p>
              </div>
            </div>
          </div>

          {/* personalisation */}

          <div className='my-4 flex flex-col gap-2'>
            <h1 className='text-2xl font-semibold flex items-center gap-2'>
              <BsGlobe2 />
              <span>{translations[language].personalization}</span>
            </h1>
            <div className='flex items-center gap-1 flex-wrap'>
              <h1 className='font-bold text-[16px]'>
                {translations[language].claim}
              </h1>
              <div className='font-bold text-[20px]'>
                <IoIosInformationCircle />
              </div>
              <label className='switch'>
                <input
                  type='checkbox'
                  checked={showPersonal}
                  onChange={() => setShowPersonal(prev => !prev)}
                />
                <span className='slider'></span>
              </label>
              <span>(0.1 SOL)</span>
            </div>
            <div>
              <p>{translations[language].personalize}</p>
            </div>
            {showPersonal && (
              <>
                <div className='flex gap-5 flex-col md:flex-row justify-between md:items-center'>
                  <div className='flex-1'>
                    <div className='flex justify-between items-center'>
                      <div>
                        <label htmlFor='prefix' className='font-semibold'>
                          {translations[language].prefix}
                        </label>{' '}
                        <span className='text-gray-500'>
                          ({translations[language].max4})
                        </span>{' '}
                        <sup>*</sup>{' '}
                      </div>
                      <div className='flex gap-2 items-center'>
                        <label className='switch-2'>
                          <input
                            type='checkbox'
                            checked={isChecked}
                            onChange={() => setIsChecked(!isChecked)}
                          />
                          <span className='slider'></span>
                        </label>
                        <span className='font-semibold'>
                          {translations[language].enable}
                        </span>
                      </div>
                    </div>
                    <input
                      type='text'
                      placeholder={translations[language].pumpfront}
                      disabled={!isChecked}
                      className={`border w-full mt-2 border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400  ${
                        !isChecked
                          ? 'bg-gray-200 cursor-not-allowed'
                          : 'bg-white'
                      }`}
                    />
                  </div>
                  <div className='flex-1'>
                    <div className='flex justify-between items-center'>
                      <div>
                        <label htmlFor='prefix' className='font-semibold'>
                          {translations[language].suffix}
                        </label>{' '}
                        <span className='text-gray-500'>
                          ({translations[language].max4})
                        </span>{' '}
                        <sup>*</sup>{' '}
                      </div>
                      <div className='flex gap-2 items-center'>
                        <label className='switch-2'>
                          <input
                            type='checkbox'
                            checked={isCheck}
                            onChange={() => setIsCheck(!isCheck)}
                          />
                          <span className='slider'></span>
                        </label>
                        <span className='font-semibold'>
                          {translations[language].enable}
                        </span>
                      </div>
                    </div>
                    <input
                      type='text'
                      placeholder={translations[language].pump}
                      disabled={!isCheck}
                      className={`border w-full mt-2 border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400  ${
                        !isCheck ? 'bg-gray-200 cursor-not-allowed' : 'bg-white'
                      }`}
                    />
                  </div>
                </div>
                <div className='flex border rounded-3xl border-gray-400 justify-between items-center my-4 p-3'>
                  <p className='flex gap-2 items-center text-lg'>
                    {' '}
                    <span className='font-bold md:text-2xl'>
                      <IoFlashOutline />
                    </span>{' '}
                    <span className='text-sm md:text-lg'>
                      {translations[language].addGen}
                    </span>{' '}
                  </p>
                  <div className='flex gap-2 text-xl cursor-pointer font-semibold text-[#00c8f8] items-center'>
                    <LuRefreshCw />
                    <p className='text-sm md:text-lg font-normal'>
                      {translations[language].gend}
                    </p>
                  </div>
                </div>
                <div className='bg-[#fff9df] p-3 flex gap-3 items-center rounded-2xl'>
                  <div>
                    <FaRegClock />
                  </div>
                  <div>{translations[language].paraprocess}</div>
                </div>
              </>
            )}
          </div>

          <div className='flex flex-col my-4  gap-2'>
            <div className='flex gap-2 items-center justify-between'>
              <h1 className='text-xl font-semibold'>
                <span>{translations[language].accdel}</span>
              </h1>
              <div>
                <label className='switch'>
                  <input
                    type='checkbox'
                    checked={deletion}
                    onChange={() => setDeletion(prev => !prev)}
                  />
                  <span className='slider'></span>
                </label>
                <span className='ml-2'>(0.1 SOL)</span>
              </div>
            </div>
            {deletion && (
              <>
                <p>{translations[language].accdesc}</p>
                <div className='flex my-2 justify-between flex-wrap'>
                  {/* Sol Tool */}
                  <div className='flex items-center gap-3'>
                    <div>{translations[language].soltool}</div>
                    <label className='switch-2'>
                      <input
                        type='checkbox'
                        checked={activeOption === 'sol'}
                        onChange={() =>
                          setActiveOption(activeOption === 'sol' ? '' : 'sol')
                        }
                      />
                      <span className='slider'></span>
                    </label>
                  </div>

                  {/* Token Creator */}
                  <div className='flex items-center gap-3'>
                    <div>{translations[language].tokenCreator}</div>
                    <label className='switch-2'>
                      <input
                        type='checkbox'
                        checked={activeOption === 'token'}
                        onChange={() =>
                          setActiveOption(
                            activeOption === 'token' ? '' : 'token'
                          )
                        }
                      />
                      <span className='slider'></span>
                    </label>
                  </div>

                  {/* Account Owner */}
                  <div className='flex items-center gap-3'>
                    <div>{translations[language].accOwner}</div>
                    <label className='switch-2'>
                      <input
                        type='checkbox'
                        checked={activeOption === 'owner'}
                        onChange={() =>
                          setActiveOption(
                            activeOption === 'owner' ? '' : 'owner'
                          )
                        }
                      />
                      <span className='slider'></span>
                    </label>
                  </div>

                  {/* Custom Address */}
                  <div className='flex items-center gap-3'>
                    <div>{translations[language].customAddress}</div>
                    <label className='switch-2'>
                      <input
                        type='checkbox'
                        checked={activeOption === 'custom'}
                        onChange={() =>
                          setActiveOption(
                            activeOption === 'custom' ? '' : 'custom'
                          )
                        }
                      />
                      <span className='slider'></span>
                    </label>
                  </div>
                </div>
                <div>
                  <input
                    type='text'
                    placeholder={translations[language].enadd}
                    className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 w-full md:w-[50%] focus:ring-blue-400'
                  />
                </div>
              </>
            )}
          </div>

          <div className='text-center'>
            <button className='bg-[#02CCE6] cursor-pointer px-4 rounded text-white py-2'>
              {translations[language].createToken}
            </button>
            <div className='mt-3 text-sm'>
              {translations[language].totalFees}{' '}
              <span className='text-[#02CCE6]'>0.20 SOL</span>{' '}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
