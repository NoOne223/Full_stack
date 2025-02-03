import React from 'react'

interface OpenModalButtonProps{
    children:  React.ReactNode,
    className: string,
}

const OpenModalButton: React.FC<OpenModalButtonProps> = ({ children, className }) => {
  return (
    <button className={`min-w-[150px] rounded-xl border font-bold p-2 ${className}`}>
      {children}
    </button>
  )
}

export default OpenModalButton
