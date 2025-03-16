'use client'
import Image from 'next/image'
import React, { useState } from 'react'

const languages = [
  {
    "id": "1",
    "lang": "vi",
    "lang_name": "Tiếng Việt",
    "lang_icon": "/images/vietnam.png"
  },
  {
    "id": "2",
    "lang": "en",
    "lang_name": "English",
    "lang_icon": "/images/united-kingdom.png"
  },
  {
    "id": "3",
    "lang": "ja",
    "lang_name": "日本語",
    "lang_icon": "/images/japan.png"
  }
];

const LangChange = () => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);

  const toggleDropdown = () => {
    setIsDropdown(!isDropdown);
  };

  const selectLanguage = (lang: any) => {
    setSelectedLang(lang);
    setIsDropdown(false);
  };

  return (
    <div className='relative'>
      <a className='cursor-pointer' onClick={toggleDropdown}>
        <Image className='w-full h-10' src={selectedLang.lang_icon} width={500} height={500} alt='Language logo'/>
      </a>
      <ul className={`absolute bg-primary rounded-2xl w-44 p-3 shadow-3xl shadow-secondary transition-all duration-500 ease-in-out ${isDropdown ? 'opacity-100 top-12 z-10' : 'opacity-0 -top-[120px] -z-10'}`}>
        {languages.map((lang) => (
          <li key={lang.id} className='flex items-center gap-x-2 my-2 cursor-pointer group' onClick={() => selectLanguage(lang)}>
            <Image className='w-fit h-10' src={lang.lang_icon} width={500} height={500} alt='Language logo'/>
            <p className='group-hover:text-thirdary'>{lang.lang_name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LangChange;