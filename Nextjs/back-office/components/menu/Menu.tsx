'use client'
import React from 'react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import './menu.css'
import DropdownMenu from '../dropdown_menu/DropdownMenu'

const Menu = () => {
    const pathname = usePathname()
    return (
        <div>
           <Link href='/'><Image className='h-[65px] w-full object-contain' src='/image/BO-logo.png' alt='Logo' width={500} height={500}/></Link>
            <nav>
                <ul className='list-none p-0 flex items-center justify-center'>
                    <li className='p-4'>
                        <Link className={`link hover:text-[#00ccff] ${pathname === '/' ? 'active' : ''}`} href="/">Home</Link>
                    </li>
                    <li className='p-4 relative'>
                        <DropdownMenu 
                        options={[
                            { label: 'Item 1', path: '/item1' },
                            { label: 'Item 2', path: '/item2' },    
                            { label: 'Item 3', path: '/item3' },
                        ]}
                        />
                    </li>
                    <li className='p-4'>
                        <Link className={`link hover:text-[#00ccff] ${pathname === '' ? 'active' : ''}`} href="/">Action</Link>
                    </li>
                    <li className='p-4'>
                        <Link className={`link hover:text-[#00ccff] ${pathname === '' ? 'active' : ''}`} href="/">Icon</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Menu
