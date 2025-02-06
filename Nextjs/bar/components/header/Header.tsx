import React from 'react'
import NavMenu from '../nav/NavMenu'
import Image from 'next/image'

const Header = () => {
  return (
    <header className='shadow-lg shadow-emerald-500/50 py-4'>
        <div className='container mx-auto p-3 flex items-center justify-center gap-x-5'>
          <Image className='h-32 object-contain w-fit rotate-[20deg]' src='/images/barlogo.png' width={500} height={500} alt='Logo'/>
          <NavMenu />
        </div>
    </header>
  )
}

export default Header
