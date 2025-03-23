import React from 'react'

interface SecondaryButtonProps {
    className: string;
    children: string;
}

const SecondaryButton:React.FC<SecondaryButtonProps> = ( {className, children} ) => {
  return (
    <button className={`${className} px-5 py-2 rounded-sm font-semibold bg-primary text-white w-full cursor-pointer hover:bg-thirdary`}>
      {children}
    </button>
  )
}

export default SecondaryButton
