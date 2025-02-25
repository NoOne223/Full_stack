import Image from 'next/image'
import React from 'react'

const Skill = () => {
  return (
    <div className='container mx-auto mt-16 p-3'>
        <h2 className='text-6xl font-bold text-center mb-8'>Các kỹ năng</h2>
        <div className='flex flex-wrap justify-center gap-x-10 gap-y-5'>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/html5.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/html5.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/html5.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/html5.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/html5.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/html5.svg' width={500} height={500} alt='Skill image'/>
            </div>
        </div>
    </div>
  )
}

export default Skill