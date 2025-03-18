import React from 'react'

interface ButtonProps {
    className: string;
    children: string;
}
const Button:React.FC<ButtonProps> = ( {className, children} ) => {
  return (
    <button className={`cursor-pointer border border-white rounded-full py-2 px-4 max-w-3xs w-full hover:bg-thirdary hover:border-transparent ${className}`}>
      {children}
    </button>
  )
}

export default Button
