'use client'
import React, { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

interface OptionProp{
    label: string;
    path: string;
}

const DropdownMenu = ({ options } : { options: OptionProp[] }) => {
    const pathname = usePathname()
    const [isExpanded, setIsExpanded] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsExpanded(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div ref={dropdownRef}>  
            <button
                onClick={() => setIsExpanded(!isExpanded)} 
                className='hover:text-[#00ccff]'>
                Dropdown <FontAwesomeIcon icon={faCaretDown} />
            </button>
            {isExpanded &&
                <div>
                    <ul className='list-none bg-white border border-black absolute rounded w-48 p-2'>
                        {options.map((option, index) => (
                            <li key={index} className='py-2'>
                                <Link className={`link hover:text-[#00ccff] ${pathname === option.path ? 'active' : ''}`} href={option.path}>{option.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            }
        </div>
    )
}

export default DropdownMenu
