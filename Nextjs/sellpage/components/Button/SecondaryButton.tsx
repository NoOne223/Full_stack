import React from 'react'
import './button.css'

interface SecondaryButtonProps {
    children: React.ReactNode;
    className: string;
}

const SecondaryButton: React.FC<SecondaryButtonProps> = ({ children, className}) => {
  return (
    <button className={`bg-color-2 text-white font-bold min-w-[150px] py-2 px-3 rounded-md uppercase ${className}`}>{children}</button>
  )
}

export default SecondaryButton
