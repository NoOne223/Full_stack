"use client";
import React from 'react'

interface CancelButtonProps{
    label: string;
    onClick: () => void;
}

const CancelButton:React.FC<CancelButtonProps> = ({label, onClick}) => {
  return (
    <div className='py-3 text-center'>
      <button onClick={onClick} className="bg-gray-500 text-lightblue min-w-[150px] rounded-lg p-2">
        {label}
      </button>
    </div>
  )
}

export default CancelButton
