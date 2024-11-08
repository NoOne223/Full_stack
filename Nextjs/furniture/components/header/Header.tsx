'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => { //Sử dụng cho các component
  const pathname = usePathname()
  return (
    <div>
      <header>
        <nav className='nav-menu bg-header-color p-7 shadow-bottom'>
            <div className='container m-auto flex items-end justify-between'>
                <div className='logo'>
                  <Link href='/'>
                    <Image className='h-[85px] object-contain' src='/image/logo.png' alt='Logo' width={500} height={500} />
                  </Link>
                </div>
                <ul className='flex'>
                    <li className='p-4'>
                      <Link className={`link p-3 ${pathname === '/' ? 'active' : ''}`} href=''>Home</Link>
                    </li>
                    <li className='p-4'>
                      <Link className={`link p-3  ${pathname === '' ? 'active' : ''}`} href=''>Products</Link>
                    </li>
                    <li className='p-4'>
                      <Link className={`link p-3  ${pathname === '' ? 'active' : ''}`} href=''>Services</Link>
                    </li>
                    <li className='p-4'>
                      <Link className={`link p-3  ${pathname === '' ? 'active' : ''}`} href=''>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
      </header>
    </div>
  )
}

export default Header
