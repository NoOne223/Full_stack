'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const LangChange = () => {
  const [isDropdown, setIsDropdown] = useState(false);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  }

  return (
    <div className='relative'>
      <a className='cursor-pointer' onClick={toggleDropdown}>
        <Image className='w-full h-10' src='/images/vietnam.png' width={500} height={500} alt='Language logo'/>
      </a>
      <ul className={`absolute bg-primary rounded-2xl w-44 p-3 shadow-3xl shadow-secondary transition-all duration-500 ease-in-out ${isDropdown ? 'opacity-100 top-12 z-10' : 'opacity-0 -top-[120px] -z-10'}`}>
        <li className='flex items-center gap-x-2 my-2 cursor-pointer'>
          <Image className='w-fit h-10' src='/images/vietnam.png' width={500} height={500} alt='Language logo'/>
          <p>Tiếng Việt</p>
        </li>
        <li className='flex items-center gap-x-2 my-2 cursor-pointer'>
          <Image className='w-fit h-10' src='/images/united-kingdom.png' width={500} height={500} alt='Language logo'/>
          <p>English</p>
        </li>
        <li className='flex items-center gap-x-2 my-2 cursor-pointer'>
          <Image className='w-fit h-10' src='/images/japan.png' width={500} height={500} alt='Language logo'/>
          <p>日本語</p>
        </li>
      </ul>
    </div>
  )
}

export default LangChange