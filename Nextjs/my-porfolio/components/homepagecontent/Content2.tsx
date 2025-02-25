import Image from 'next/image'
import React from 'react'
import './content.css'
import Link from 'next/link'

const Content2 = () => {
  return (
    <div className='container mx-auto p-3 relative'>
        <div className='grid grid-cols-2 gap-5 max-w-6xl mx-auto'>
            <Link className='relative max-h-[400px] card-content overflow-hidden rounded-xl' href='#info'>
                <Image className='w-full h-full rounded-xl card-image' src='/images/hi.jpeg' width={500} height={500} alt='Link Image'/>
                <div className='card-layout w-full h-full bg-black/50 absolute top-0 left-0 rounded-xl text-center content-center hidden'>
                    <p className='text-white text-4xl uppercase font-bold'>Thông tin cá nhân</p>
                </div>
            </Link>
            <Link className='relative max-h-[400px] card-content overflow-hidden rounded-xl' href='#skill'>
                <Image className='w-full h-full rounded-xl card-image' src='/images/skill.jpeg' width={500} height={500} alt='Link Image'/>
                <div className='card-layout w-full h-full bg-black/50 absolute top-0 left-0 rounded-xl text-center content-center hidden'>
                    <p className='text-white text-4xl uppercase font-bold'>Kinh nghiệm & Kỹ năng</p>
                </div>
            </Link>
            <Link className='relative max-h-[400px] card-content overflow-hidden rounded-xl' href='#project'>
                <Image className='w-full h-full rounded-xl card-image' src='/images/project.jpeg' width={500} height={500} alt='Link Image'/>
                <div className='card-layout w-full h-full bg-black/50 absolute top-0 left-0 rounded-xl text-center content-center hidden'>
                    <p className='text-white text-4xl uppercase font-bold'>Dự án</p>
                </div>
            </Link>
            <Link className='relative max-h-[400px] card-content overflow-hidden rounded-xl' href='#contact'>
                <Image className='w-full h-full rounded-xl card-image' src='/images/contact.jpeg' width={500} height={500} alt='Link Image'/>
                <div className='card-layout w-full h-full bg-black/50 absolute top-0 left-0 rounded-xl text-center content-center hidden'>
                    <p className='text-white text-4xl uppercase font-bold'>Thông tin liên lạc</p>
                </div>
            </Link>
        </div>
        <div className='bg-gray-500 text-white shadow p-12 text-center max-w-60 w-full h-fit absolute top-0 bottom-0 left-0 right-0 m-auto'>
            <p className='font-bold uppercase'>Portfolio</p>
        </div>
    </div>
  )
}

export default Content2