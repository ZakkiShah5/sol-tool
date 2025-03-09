'use client'

import { useState } from 'react'
import { MdOutlineFileUpload } from 'react-icons/md'
import { IoIosInformationCircle } from 'react-icons/io'
import { FaRegSnowflake } from "react-icons/fa";

export default function TokenForm () {
  const [image, setImage] = useState(null)

  const handleImageUpload = event => {
    const file = event.target.files[0]
    setImage(file)
  }

  return (
    <div className='max-w-4xl mx-auto p-6'>
      <form className='mt-8'>
        <div className='grid grid-cols-2 gap-6'>
          <div className='flex flex-col'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>Name:
            </label>
            <input
              type='text'
              placeholder='Put the Name of Your Token'
              className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          {/* Symbol Field */}
          <div className='flex flex-col'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>Symbol:
            </label>
            <input
              type='text'
              placeholder='Put the Symbol of your token'
              className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
          </div>

          {/* Decimals Field */}
          <div className='flex flex-col'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>Decimals:
            </label>
            <input
              type='number'
              defaultValue='6'
              className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <small className='text-gray-500'>
              Most meme coin use 6 decimals
            </small>
          </div>

          {/* Supply Field */}
          <div className='flex flex-col'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>Supply:
            </label>
            <input
              type='number'
              defaultValue='1'
              className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            />
            <small className='text-gray-500'>Most meme coin use 10B</small>
          </div>
        </div>

        <div className='flex mt-5 justify-between gap-6'>
          <div className='flex flex-col flex-1/2'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>Image:
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
              <div>Upload Image</div>
            </div>
            <small className='text-gray-500'>
              Most meme coin use a squared 1000x1000 logo
            </small>
          </div>

          {/* Description Field */}
          <div className='flex flex-col flex-1/2'>
            <label className='text-black mb-1'>
              <sup className='text-red-500 font-bold'>*</sup>Description:
            </label>
            <textarea
              placeholder='Put the description of your Token'
              className='border resize-none h-32 border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
            ></textarea>
          </div>
        </div>
        <div className='my-8 flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <h1 className='font-bold text-[16px]'>Add Social Links & Tags</h1>
            <div className='font-bold text-[20px]'>
              <IoIosInformationCircle />
            </div>
            <label className='switch'>
              <input type='checkbox' />
              <span className='slider'></span>
            </label>
          </div>
          <small className='text-gray-500'>
            Add links to your token metadata
          </small>
          <div className='flex items-center justify-between gap-5'>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>Website:</label>
              <input
                type='text'
                placeholder='Put your Website'
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>Twitter:</label>
              <input
                type='text'
                placeholder='Put your Twitter'
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>Telegram:</label>
              <input
                type='text'
                placeholder='Put your Telegram'
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
            <div className='flex flex-col'>
              <label className='text-black mb-1'>Discord:</label>
              <input
                type='text'
                placeholder='Put your Discord'
                className='border border-[#E6E8EC] p-1.5 rounded-sm focus:outline-none focus:ring-2 focus:ring-blue-400'
              />
            </div>
          </div>
        </div>

        <div className='my-8 flex flex-col gap-2'>
          <div className='flex gap-3 items-center'>
            <h1 className='gradient-text2 text-2xl'>Advanced Options</h1>
            <img src='chevup.png' alt='chev' />
          </div>

          <div className='flex items-center gap-1'>
            <h1 className='font-bold text-[16px]'>
              Modify Creator Information
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
            Change the information of the creator in the metadata, by default it
            is SOL TOOL.
          </small>
        </div>

        <div className='my-8 flex flex-col gap-2'>
          <div className='flex items-center gap-1'>
            <h1 className='font-bold text-[16px]'>Revoke Authorities</h1>
          </div>
          <small className='text-gray-500'>
            Solana Token have 3 authorities: Freeze Authority, Mint Authority
            and Update Authority. Revoke them to attract more investors.
          </small>

          <div className="flex gap-6 my-6">
            <div className="flex rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#FCFCFD]">
            <div className='text-18px'>
                <FaRegSnowflake  />
                </div>
                <div className='text-[14px]'>
                    <div className="flex justify-between items-center">
                        <span>Revoke Freeze</span>
                        <span>+0.1 SOL</span>
                    </div>
                    <p className='text-[#777E90]'>Freeze Authority allows you to freeze token accounts of holders.</p>
                </div>
            </div>
            <div className="border-grad flex rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#ECFFFF]">
                <div className='text-18px'>
                <img src="cancel.png" className='w-8' alt="" />
                </div>
                <div className='text-[14px]'>
                    <div className="flex justify-between items-center">
                        <span className='gradient-text2'>Revoke Mint</span>
                        <span>+0.1 SOL</span>
                    </div>
                    <p className='text-[#777E90]'>Mint Authority allows you to mint more supply of your token.</p>
                </div>
            </div>
            <div className="border-grad flex rounded gap-3 py-5 px-2 border-[#E6E8EC] border-2 bg-[#ECFFFF]">
            <div className='text-18px'>
                <img src="lock.png" className='w-8' alt="" />
                </div>
                <div className='text-[14px]'>
                    <div className="flex justify-between items-center">
                        <span className='gradient-text2'>Revoke Update</span>
                        <span>+0.1 SOL</span>
                    </div>
                    <p className='text-[#777E90]'>Update Authority allows you to update token metadata.</p>
                </div>
            </div>
          </div>

          <div className='text-center'>
            <button className='bg-[#02CCE6] cursor-pointer px-4 rounded text-white py-2'>Create Token</button>
            <div className='mt-3 text-sm'>Total Fees : <span className='text-[#02CCE6]'>0.20 SOL</span> </div>
          </div>
        </div>
      </form>
    </div>
  )
}
