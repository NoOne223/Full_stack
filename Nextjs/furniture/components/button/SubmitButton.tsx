import React from 'react'

interface SubmitButtonProps{
    children: React.ReactNode;
}

const SubmitButton: React.FC<SubmitButtonProps> = ({children}) => {
  return (
    <div>
        <button className='min-w-[150px] bg-black text-white py-2 hover:bg-title' type='submit'>{children}</button>
    </div>
  )
}

export default SubmitButton