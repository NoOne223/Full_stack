import Image from 'next/image'
import React from 'react'

const ProductInfo = () => {
  return (
    <section className='mt-16'>
        <div className='container mx-auto p-3'>
            <div className="grid grid-cols-4">
                <div className='overflow-hidden shadow-2xl'>
                    <div className='img-area flex relative h-[300px]'>
                        <Image 
                        className='show-img w-full h-full absolute top-0 left-0 object-cover' 
                        src='/images/women-sweater-square.png' width={500} height={500} alt='Product image'/>
                        <Image 
                        className='hide-img w-full h-full absolute top-0 -right-[400px] object-cover' 
                        src='/images/women-sweater-square2.png' width={500} height={500} alt='Product image'/>
                    </div>
                    <div className='p-3'>
                        <h2 className='text-2xl mb-6 mt-3'>Product name</h2>
                        <p className='text-2xl font-semibold text-gray-400 line-through'>800.000</p>
                        <div className='flex items-end'>
                            <p className='text-2xl font-semibold'>699.000<sup>vnđ</sup></p>
                            <p className='text-red-500'>(Giảm 12%)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductInfo
