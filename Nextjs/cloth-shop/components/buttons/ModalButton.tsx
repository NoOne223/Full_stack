import React from 'react'

interface ModalButtonProps {
    className: string;
    children: string;
}
const ModalButton:React.FC<ModalButtonProps> = ( {className, children} ) => {
  return (
    <button type='button' className={`cursor-pointer border border-white rounded-full py-2 px-4 max-w-3xs w-full hover:bg-thirdary hover:border-transparent ${className}`}>
      {children}
    </button>
  )
}

export default ModalButton
