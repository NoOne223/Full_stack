import React from 'react'

interface CardContentProp{
    title: string;
    content: string;
}

const CardContent: React.FC<CardContentProp> = ({ title, content }) => {
  return (
    <div className='shadow-lg rounded-b-2xl mt-10'>
        <div className='bg-primary-color rounded-t-2xl text-center text-white py-2'>
          <h2>{title}</h2>
        </div>
        <div className='py-2 px-3'>
          <p>{content}</p>
        </div>
    </div>
  )
}

export default CardContent
