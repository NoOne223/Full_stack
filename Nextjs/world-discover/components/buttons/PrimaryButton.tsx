import React from 'react'

interface PrimaryButtonProps {
  className: string;
  children: React.ReactNode;
}
const PrimaryButton: React.FC<PrimaryButtonProps> = ({ className, children }) => {
  return (
    <button type='button' className={`min-w-40 py-2 px-3 bg-primary-color rounded-xl text-white text-center ${className}`}>{children}</button>
  )
}

export default PrimaryButton