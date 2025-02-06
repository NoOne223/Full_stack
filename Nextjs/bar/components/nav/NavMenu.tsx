'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const NavMenu = () => {
    const pathname = usePathname()
    
    return (
        <div>
            <h1 className='uppercase font-extrabold text-7xl mb-4 italic bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent'>Hi bar</h1>
            <nav>
                <ul className='flex gap-5'>
                    <li className={`p-3 font-bold ${pathname === '/' ? "bg-white text-black" : ""}`}>
                        <Link href='/'>Về chúng tôi</Link>
                    </li>
                    <li className={`p-3 font-bold ${pathname === '/menu' ? "bg-white text-black" : ""}`}>
                        <Link href='/menu'>Thực đơn</Link>
                    </li>
                    <li className={`p-3 font-bold ${pathname === '/combo' ? "bg-white text-black" : ""}`}>
                        <Link href='/combo'>Combo</Link>
                    </li>
                    <li className={`p-3 font-bold ${pathname === '/reservation' ? "bg-white text-black" : ""}`}>
                        <Link href='/reservation'>Đặt bàn</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMenu