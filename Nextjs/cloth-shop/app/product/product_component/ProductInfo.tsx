import Image from 'next/image'
import React from 'react'

const ProductInfo = () => {
  return (
    <section className='mt-16'>
        <div className='container mx-auto p-3'>
            <div className="grid grid-cols-4">
                <div className='overflow-hidden'>
                    <div className='img-area flex relative h-[380px]'>
                        <Image 
                        className='show-img w-full h-full absolute top-0 left-0' 
                        src='/images/women-sweater-square.png' width={500} height={500} alt='Product image'/>
                        <Image 
                        className='hide-img w-full h-full absolute top-0 -right-[500px]' 
                        src='/images/women-sweater-square2.png' width={500} height={500} alt='Product image'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductInfo
