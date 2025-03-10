import { FaMagnifyingGlass } from 'react-icons/fa6'

const LiquidityPool = () => {
  return (
    <section className='max-w-4xl mx-auto p-6 font-[Poppins]'>
      <div className='border-grad flex flex-col md:flex-row justify-center items-center gap-3 border-[#E6E8EC] border-2 p-3 text-center font-normal bg-[#ECFFFF]'>
        <p>Wants to create a Liquidity Pool?</p>
        <span className='text-[#02CCE6] cursor-pointer'> Create it Here</span>
      </div>

      <div className='my-5 flex gap-4 flex-col bg-[#ECFFFF] border-[#02CCE6] border-2 rounded p-5 md:py-14 md:px-20'>
        <h1 className='text-xl font-semibold '>
          Are you going to Create a Liquidity Pool?
        </h1>
        <p>
          If you want to <b>create a liquidity pool</b> you will need to Revoke
          Freeze Authority of the Token. You can also Revoke the Mint Authority
          to get the people reliability. You can do both here, each one costs
          0.1 SOL.
        </p>
        <div className='border-grad flex items-center gap-6 py-2 px-4'>
          <FaMagnifyingGlass />
          <p className='font-medium text-sm '>Connect your wallet please.</p>
        </div>
        <div className='mt-5 flex flex-col md:flex-row gap-5 justify-between items-center'>
          <button className='w-[100%] cursor-pointer py-2 px-10 rounded text-white bg-[#02CCE6]'>Revoke Freeze Authority</button>
          <button className='w-[100%] cursor-pointer py-2 px-10 rounded text-white bg-[#02CCE6]'>Revoke Mint Authority</button>
        </div>
      </div>
    </section>
  )
}

export default LiquidityPool
