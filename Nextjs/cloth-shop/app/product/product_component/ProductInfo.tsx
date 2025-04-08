import { faEye } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const ProductInfo = () => {
  return (
    <section className='mt-44'>
        <div className='container mx-auto p-3'>
            <div className='border-b-2 border-primary pb-6'>
                <h2 className='sub-title'>Tất cả sản phẩm <span className='text-black text-xl'>( 122 sản phẩm )</span></h2>
            </div>
            <div className="grid grid-cols-4 gap-5 mt-6">
                <div className='overflow-hidden shadow-2xl relative h-[520px] group'>
                    <div className='img-area flex relative h-[300px]'>
                        <Image 
                        className='show-img w-full h-full absolute top-0 left-0 object-cover' 
                        src='/images/women-sweater-square.png' width={500} height={500} alt='Product image'/>
                        <Image 
                        className='hide-img w-full h-full absolute top-0 -right-[400px] object-cover' 
                        src='/images/women-sweater-square2.png' width={500} height={500} alt='Product image'/>
                    </div>
                    <div className='p-3'>
                        <h3 className='text-2xl mb-6 mt-3'>Sweater nữ ô vuông</h3>
                        <p className='text-2xl font-semibold text-gray-400 line-through'>800.000</p>
                        <div className='flex items-end'>
                            <p className='text-2xl font-semibold'>699.000<sup>vnđ</sup></p>
                            <p className='text-red-500'>(Giảm 12%)</p>
                        </div>
                    </div>
                    <Link href='/product/productdetail'>
                        <div className='py-3 text-center shadow-[0px_0px_5px] shadow-black/50 hover:bg-thirdary hover:text-white absolute w-full -bottom-16 left-0 group-hover:bottom-0 transition-all duration-500 ease-in-out'>
                            <FontAwesomeIcon className='me-4' icon={faEye} />
                            <span>Chi tiết sản phẩm</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProductInfo