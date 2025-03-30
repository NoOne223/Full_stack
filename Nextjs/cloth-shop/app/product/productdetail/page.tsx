import { faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const metadata: Metadata = {
    title: 'Product detail',
    description: 'This is product detail'
}

export default function ProductDetail() {
    return (
        <div>
            <div className='my-6 mx-10'>
                <Link href='/product' className='hover:text-thirdary'>
                    <FontAwesomeIcon className='me-2' icon={faLeftLong} />
                    Quay lại trang sản phẩm
                </Link>
            </div>
            <div className='container mx-auto p-3'>
                <div className='flex'>
                    <div className='w-[30%] relative'>
                        <Image className='w-full h-full' src='/images/women-sweater-square.png' width={500} height={500} alt='product image'/>
                    </div>
                    <div className='w-[70%] px-10'>
                        <h2 className='text-5xl'>Sweater nữ ô vuông</h2>
                        <div className='mt-3'>
                            <p>Mã hàng : <strong>ABCD1234</strong></p>
                            <p>Tình trạng : <strong>Còn hàng</strong></p>
                        </div>
                        <p className='my-6'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem optio ducimus, mollitia assumenda minus nam tempore iusto quisquam suscipit eligendi quo vitae nisi nesciunt vel veritatis. Nisi maxime porro consequatur?
                        </p>
                        <ul>
                            <li className='mb-3'>
                                <p>Giá gốc : 800.000vnđ</p>
                            </li>
                            <li className='mb-3'>
                                <p>Mã giảm : 12%</p>
                            </li>
                            <li className='mb-3'>
                                <p>Giá thanh toán : 699.000vnđ</p>
                            </li>
                        </ul>
                        <div className='flex flex-wrap'>
                            <button className='w-[45%]'></button>
                            <button className='w-[45%]'></button>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}