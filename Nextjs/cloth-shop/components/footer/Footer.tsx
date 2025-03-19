import React from 'react'

const Footer = () => {
  return (
    <footer className='h-full relative'>
        <div className='flex min-h-[50vh]'>
            <div className='w-1/2'></div>
            <div className='w-1/2 bg-primary'></div>
        </div>
        <div className='container m-auto p-3 absolute top-0 left-0 right-0 bottom-0 h-fit'>
            <div className='flex'>
                <div className='w-1/2 pr-5'>
                    <h2 className='text-5xl uppercase'>Cảm ơn bạn !</h2>
                    <p className='my-6'>
                        Cảm ơn bạn đã ghé thăm trang của chúng tôi, hy vọng các sản phẩm của chúng tôi mang lại sẽ làm hài lòng các bạn. Đối với những khách hàng mới, chúng tôi mong muốn một ngày nào đó cũng sẽ được phục vụ quý vị ! 
                    </p>
                </div>
                <div className='w-1/2 px-5'>
                    <h2 className='text-5xl uppercase text-thirdary'>Hello</h2>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer