import Image from 'next/image'
import React from 'react'
import ModalButton from '../buttons/ModalButton'

const Footer = () => {
  return (
    <footer className='mt-16'>
       <div className='container mx-auto p-3 bg-[url(/images/banner.png)] bg-cover bg-no-repeat min-h-[900px] content-center'>
        <h2 className='uppercase text-6xl text-center'>Đóng góp và phản hồi</h2>
        <div className='flex justify-center gap-x-10 mt-6'>
            <div className='bg-white shadow-2xl rounded-xl p-5 max-w-[450px]'>
                <h3 className='sub-title'>Đánh giá</h3>
                <p className='my-6'>
                    Từng đánh giá công tâm của quý khách đều có thể giúp cửa hàng của em phát triển hơn. Do đó xin mọi người hãy để lại đánh giá thật lòng nhất giúp em.
                </p>
                <ModalButton modalId='' className='bg-secondary text-white'>Đánh giá</ModalButton>
            </div>
            <div className='bg-white shadow-2xl rounded-xl p-5 max-w-[450px]'>
                <h3 className='sub-title'>Phản hồi</h3>
                <p className='my-6'>
                Nếu quý khách chưa hài lòng về sản phẩm, thái độ phục vụ xin hãy để lại phản hồi để cửa hàng xử lí.
                </p>
                <ModalButton modalId='' className='bg-secondary text-white'>Phản hồi</ModalButton>
            </div>
        </div>
       </div>
       <div className='p-3 shadow-sm bg-primary shadow-secondary'>
        <p className='text-center text-white'>Copyright © 2025 THE Blazer.</p>
       </div>
    </footer>
  )
}

export default Footer