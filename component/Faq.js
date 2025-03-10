'use client'
import { useState } from 'react'
import { FaChevronUp, FaChevronDown } from 'react-icons/fa'

const Faq = () => {
  const steps = [
    'Connect your Solana wallet',
    'Write the name you want for your Token',
    'Indicate the symbol (max 8 characters)',
    'Select the decimals quantity (0 for Whitelist Token, 6 for utility token)',
    'Write the description you want for your SPL Token',
    'Upload the image for your token (PNG)',
    'Put the Supply of your Token',
    'Click on create, accept the transaction and wait until your token is ready'
  ]

  const faqs = [
    {
      question: 'What is an SPL token?',
      answer:
        'An SPL token is a token built on the Solana blockchain, similar to ERC-20 tokens on Ethereum.'
    },
    {
      question: 'How do I connect my Solana wallet?',
      answer:
        'You can connect your wallet using a browser extension like Phantom or Solflare.'
    },
    {
      question: 'What is the maximum symbol length for a token?',
      answer: 'The token symbol can have a maximum of 8 characters.'
    },
    {
      question: 'What are whitelist tokens?',
      answer:
        'Whitelist tokens are tokens with 0 decimal places, used mainly for access control and permissions.'
    }
  ]

  const [openIndex, setOpenIndex] = useState(null)

  const toggleFAQ = index => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className='max-w-4xl mx-auto p-6 font-[Poppins]'>
      <h2 className='text-2xl font-bold mb-4'>
        How to use Solana Token Creator
      </h2>
      <ol className='list-decimal ml-2 list-inside space-y-2'>
        {steps.map((step, index) => (
          <li key={index} className='text-gray-700'>
            {step}
          </li>
        ))}
      </ol>

      <div className='mt-10'>
        <h1 className='gradient-text2 font-[DM_Sans] text-center my-5 text-4xl font-bold'>
          Frequently Asked Questions
        </h1>

        {faqs.map((faq, index) => (
          <div
            key={index}
            className=' my-5 border-t p-2 md:p-4 border-[#E6E8EC] font-[Poppins] cursor-pointer'
            onClick={() => toggleFAQ(index)}
          >
            <div className='flex justify-between'>
              <h3 className={`md:text-xl ${openIndex === index ? 'text-[#02CCE6]': ''}`}>{faq.question}</h3>
              <span className={`text-xl ${openIndex === index ? 'text-[#02CCE6]': ''}`}>
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </div>
            {openIndex === index && <p className='mt-2'>{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Faq
