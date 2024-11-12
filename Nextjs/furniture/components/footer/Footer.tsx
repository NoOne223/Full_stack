import React from 'react'
import ContactForm from '../form/ContactForm'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <div id='Contact'>
        <div className='container mx-auto p-[10px] mt-16'>
            <h2 className='uppercase text-6xl font-extrabold text-title mb-2'>Thank you !</h2>
            <div className='flex justify-between'>
                <div className='w-1/2'>
                    <p>
                    Thank you for visiting our site! If you're looking to give your home a fresh new look, we're the perfect choice! Please fill out the form below
                    </p>
                    <ContactForm />
                </div>
                <div className='w-2/5'>
                    <p>
                    You can visit our social media platforms to see more videos of decoration ideas and interior spaces
                    </p>
                    <div>
                        <Link className='flex items-center my-3' href='' target='_blank'><Image className='me-3' src="/image/facebook.png" width={30} height={30} alt={'Logo'}/>FaceBook</Link>
                        <Link className='flex items-center my-3' href='' target='_blank'><Image className='me-3' src="/image/youtube.png" width={30} height={30} alt={'Logo'}/>YouTube</Link>
                        <Link className='flex items-center my-3' href='' target='_blank'><Image className='me-3' src="/image/instagram.png" width={30} height={30} alt={'Logo'}/>Instagram</Link>
                    </div>
                    <p>
                    You can also visit our office at: 123 Street, District 1, Ward
                    </p>
                </div>
            </div>
        </div>
        <div className='bg-title p-3 text-center mt-16'>
            This make by NamHoang
        </div>
    </div>
  )
}

export default Footer