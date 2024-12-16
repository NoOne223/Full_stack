import React from 'react'
import './header.css'
import Link from 'next/link'
import Image from 'next/image'

const Header = () => {
  return (
    <div className='flex flex-col min-h-screen justify-center'>
      <div className='container mx-auto p-3 text-center'>
        <Image className='w-full object-contain m-auto max-h-[300px]' src="/images/logo-2.png" width={500} height={500} alt="Logo"/>
        <h1 className='text-5xl uppercase text-color-2'>Everything your website needs in a single template</h1>
      </div>
    </div>
  )
}

export default Header