'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const languages = [
  { code: 'vi', flag: '/images/vietnam.png' },
  { code: 'en', flag: '/images/united-kingdom.png' },
  { code: 'jp', flag: '/images/japan.png' }
];
const LangChange = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [selecteddLang, setSelectedLang] = useState(languages[0]);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  }

  const selectLanguage = (lang: any) => {
    setSelectedLang(lang);
    setIsDropdown(false);
  }

  return (
    <div className='relative'>
      <a className='cursor-pointer' onClick={toggleDropdown}>
        <Image className='w-full h-10' src={selecteddLang.flag} width={500} height={500} alt='Language logo'/>
      </a>
      <ul className={`absolute bg-primary rounded-2xl w-44 p-3 shadow-3xl shadow-secondary transition-all duration-500 ease-in-out ${isDropdown ? 'opacity-100 top-12 z-10' : 'opacity-0 -top-[120px] -z-10'}`}>
        <li className='flex items-center gap-x-2 my-2 cursor-pointer group'>
          <Image className='w-fit h-10' src='/images/vietnam.png' width={500} height={500} alt='Language logo'/>
          <p className='group-hover:text-thirdary'>Tiếng Việt</p>
        </li>
        <li className='flex items-center gap-x-2 my-2 cursor-pointer group'>
          <Image className='w-fit h-10' src='/images/united-kingdom.png' width={500} height={500} alt='Language logo'/>
          <p className='group-hover:text-thirdary'>English</p>
        </li>
        <li className='flex items-center gap-x-2 my-2 cursor-pointer group'>
          <Image className='w-fit h-10' src='/images/japan.png' width={500} height={500} alt='Language logo'/>
          <p className='group-hover:text-thirdary'>日本語</p>
        </li>
      </ul>
    </div>
  )
}

export default LangChange