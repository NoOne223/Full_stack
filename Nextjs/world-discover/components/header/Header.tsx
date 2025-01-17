import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='container mx-auto p-3'>
            <Link href='/'><Image className='w-fit h-16 object-contain' src='/images/pagelogo.png' width={500} height={500} alt='Logo'/></Link>
            
        </div>
    </div>
  )
}

export default Header