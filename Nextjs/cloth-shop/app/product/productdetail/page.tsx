import { faCartShopping, faLeftLong } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Metadata } from 'next';
import Link from 'next/link';
import React from 'react';
import PurchaseProduct from '../product_component/PurchaseProduct';

export const metadata: Metadata = {
    title: 'Product detail',
    description: 'This is product detail'
}

export default function ProductDetail() {
    return (
        <div>
            <div className='max-w-[1800px] w-full py-4 mx-auto flex items-center justify-between bg-white fixed top-0 left-0 right-0 z-10'>
                <Link href='/product' className='hover:text-thirdary text-2xl'>
                    <FontAwesomeIcon className='me-2' icon={faLeftLong} />
                    Quay lại
                </Link>
                <FontAwesomeIcon className='cursor-pointer hover:text-secondary text-2xl' icon={faCartShopping} />
            </div>
            <PurchaseProduct />
            <div className='container mx-auto p-3 top-16'>
                
            </div>
        </div>
    )
}