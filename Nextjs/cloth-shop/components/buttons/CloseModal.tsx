import React from 'react'

interface CloseModalProps {
    className: string;
    children: string;
}
const CloseModal:React.FC<CloseModalProps> = ( {className, children} ) => {
  return (
    <button className={`font-semibold cursor-pointer text-gray-400 ${className}`}>
        {children}
    </button>
  )
}

export default CloseModal