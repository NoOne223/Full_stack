import React from 'react'
import './button.css'

interface SecondaryButtonProps {
    children: React.ReactNode;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children}) => {
  return (
    <button className='bg-color-2 text-white font-bold min-w-[150px] py-2 px-3 rounded-md uppercase'>{children}</button>
  )
}

export default SecondaryButton
