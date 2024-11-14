"use client";
import React from 'react'

interface SubmitButtonProps{
    label: string;
    // onClick: () => void;
}

const SubmitButton:React.FC<SubmitButtonProps> = ({label}) => {
  return (
    <div className='py-3 text-center'>
      <button className="bg-darkcyan text-lightblue min-w-[150px] rounded-lg p-2">
        {label}
      </button>
    </div>
  )
}

export default SubmitButton
