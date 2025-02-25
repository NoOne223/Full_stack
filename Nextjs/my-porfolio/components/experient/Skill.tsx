import Image from 'next/image'
import React from 'react'

const Skill = () => {
  return (
    <div className='container mx-auto mt-16 p-3'>
        <h2 className='text-6xl font-bold text-center mb-8'>Các kỹ năng</h2>
        <div className='grid grid-cols-5 gap-x-10 gap-y-5'>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/html5.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/css.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/sass.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/javascript.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/jquery.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/nextdotjs.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/typescript.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/bootstrap.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/tailwindcss.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/github.svg' width={500} height={500} alt='Skill image'/>
            </div>
            <div className='border border-black rounded-xl p-10 max-w-[250px] w-full shadow-custom'>
                <Image className='max-h-[80px]' src='/images/gitlab.svg' width={500} height={500} alt='Skill image'/>
            </div>
        </div>
    </div>
  )
}

export default Skill