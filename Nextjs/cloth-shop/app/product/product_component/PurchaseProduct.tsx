import React from 'react'
import AddtoCart from '@/components/buttons/AddtoCart';
import ModalButton from '@/components/buttons/ModalButton';
import Image from 'next/image';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PurchaseProduct = () => {
  return (
    <div className='container mx-auto p-3 mt-24 flex'>
      <div className='w-[30%]'>
          <Image className='w-full h-auto mb-2' src='/images/women-sweater-square.png' width={500} height={500} alt='product image'/>
          <Image className='w-full h-auto mb-2' src='/images/women-sweater-square2.png' width={500} height={500} alt='product image'/>
          <Image className='w-full h-auto mb-2' src='/images/women-sweater-square.png' width={500} height={500} alt='product image'/>
          <Image className='w-full h-auto mb-2' src='/images/women-sweater-square2.png' width={500} height={500} alt='product image'/>
          <Image className='w-full h-auto mb-2' src='/images/women-sweater-square.png' width={500} height={500} alt='product image'/>
      </div>
      <div className='w-[70%] px-10'>
          <div className='sticky top-20 bottom-0'>
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
              <div className='flex flex-wrap gap-2'>
                  <div className='w-[45%] flex-auto'>
                      <ModalButton className='rounded-sm hover:text-white' modalId='ModalShare'>
                          <FontAwesomeIcon className='me-2' icon={faShare} />
                          Chia sẻ
                      </ModalButton>
                  </div>
                  <div className='w-[45%] flex-auto'>
                  <AddtoCart></AddtoCart>
                  </div>
                  <ModalButton className='rounded-sm bg-secondary text-white' modalId='ModalShare'>
                      Thanh toán ngay
                  </ModalButton>
              </div>
          </div>
      </div>
    </div>
  )
}

export default PurchaseProduct