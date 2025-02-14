'use client'
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

interface CustomSelectProps {
    options: string[]; // Nhận danh sách tùy chọn động
    className: string;
}
const CustomSelect: React.FC<CustomSelectProps> = ( {options, className} ) => {
    const [ isDropdown, setIsDropdown ] = useState(false);
    const [ selectedOption, setSelectedOption ] = useState('Chọn')

    const handleSelect = (option: string) => {
        setSelectedOption(option)
        setIsDropdown(false)
    }

    return (
        <div className={`px-2 bg-black border border-white rounded-sm relative ${className}`}>
            <button 
                className='flex justify-between items-center w-full' 
                type='button'
                onClick={() => setIsDropdown(!isDropdown)}
            >
                <p>{selectedOption}</p>
                <FontAwesomeIcon icon={isDropdown ? faCaretUp : faCaretDown} />
            </button>
            { isDropdown && (
                <ul className='absolute left-0 top-7 bg-black border border-white w-full z-10 rounded-sm'>
                    {options.map((option) => (
                        <li className='cursor-pointer my-4 px-2 hover:text-fuchsia-500' key={option} onClick={() => handleSelect(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )} 
        </div>
    )
}

export default CustomSelect