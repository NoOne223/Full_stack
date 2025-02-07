import React from 'react'

interface PrimaryButtonProps{
    className: string;
    children: React.ReactNode;
}
const PrimaryButton:React.FC<PrimaryButtonProps> = ( {className, children} ) => {
  return (
    <button type='submit' className={`p-2 rounded-md font-semibold border border-transparent text-center min-w-32  ${className}`}>{children}</button>
  )
}

export default PrimaryButton