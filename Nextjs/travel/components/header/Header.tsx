import Image from 'next/image'
import React from 'react'
import OpenModalButton from '../buttons/OpenModalButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'

const Header = () => {
  return (
    <div className='bg-primarycolor'>
      <div className='container mx-auto p-3'>
        <Image className='h-20 object-contain w-fit' src='/image/logo.png' width={250} height={250} alt='logo'/>
        <div>
          <OpenModalButton className='bg-white'><FontAwesomeIcon icon={faUser} />Tài khoản</OpenModalButton>
        </div>
      </div>
    </div>
  )
}

export default Header
