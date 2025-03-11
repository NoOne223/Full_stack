'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faUser } from "@fortawesome/free-solid-svg-icons";
import Button from '../buttons/Button'

const Header = () => {
  const pathname = usePathname()
  
  return (
    <header className='shadow-2xl sticky top-0 w-full z-50 bg-primary'>
      <div className='container mx-auto p-3'>
          <div className='flex items-center justify-between'>
            <Image className='h-20 w-fit' src='/images/logo.png' height={500} width={500} alt='Logo'/>
            <nav>
              <ul className='text-white flex items-center gap-x-10'>
                <li>
                  <Link 
                    className={`font-semibold hover:text-secondary ${pathname === '/' ? 'text-secondary underline underline-offset-8 underline-thick' : ''}`} href="/">
                    Trang chủ
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`font-semibold hover:text-secondary ${pathname === '/product' ? 'text-secondary underline underline-offset-8 underline-thick' : ''}`} href="/product">
                    Sản phẩm
                  </Link>
                </li>
                <li>
                  <Link 
                    className={`font-semibold hover:text-secondary ${pathname === '/new' ? 'text-secondary underline underline-offset-8 underline-thick' : ''}`} href="/new">
                    Hàng mới
                  </Link>
                </li>
                <li>
                  <FontAwesomeIcon className='cursor-pointer hover:text-secondary' icon={faCartShopping} />
                </li>
                <li>
                  <Button className=''>Tài khoản</Button>
                </li>
              </ul>
            </nav>
          </div>
      </div>
    </header>
  )
}

export default Header
