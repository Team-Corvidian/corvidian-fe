import React from 'react'
// Remove unused Image import
import Navbar from '../Navbar';
import Whatsapp from './Whatsapp';

const Header = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 bg-white w-screen'>
        <div className='flex flex-row justify-between items-center px-[84px] py-[32px]'>
            <div className='w-[130px] h-[26px]'>
                <h1 className='text-black font-bold text-xl'>Logo</h1>
            </div>
            <div className="bg-[#1D1F26] w-[540px] h-[53px] rounded-[26.5px] flex items-center justify-center">
                <Navbar/>
            </div>
            <div className='w-[189px] h-[44px]'>
                <Whatsapp/>
            </div>
        </div>
    </nav>
  )
}

export default Header