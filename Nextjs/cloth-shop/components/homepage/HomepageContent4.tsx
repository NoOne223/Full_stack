import React from 'react'
import Image from 'next/image'

const HomepageContent4 = () => {
  return (
    <div className='container m-auto px-3 py-5 min-h-[50vh] content-center'>
        <div className='flex gap-x-5 text-white'>
            <div className='w-1/2'>
                <div className='p-5 bg-primary rounded-xl'>
                    <h2 className='text-3xl mb-6'>Chính sách đổi trả</h2>
                    <ul className='list-disc pl-10'>
                        <li className='py-2'>
                            Đổi trả trong vòng 7 ngày, đối với các mặt hàng bị lỗi ( rách, bung chỉ ) phải được trả lại trong ngày
                        </li>
                        <li className='py-2'>
                            Hàng đổi trả cần phải còn mác
                        </li>
                        <li className='py-2'>
                            Với các mặt hàng bị quá ngày quy định hoặc không còn mác, shop xin -20% giá trị của mặt hàng
                        </li>
                    </ul>
                </div>
                <div className='p-5 bg-primary rounded-xl mt-5'>
                    <h2 className='text-3xl mb-6'>Các ưu đãi</h2>
                    <ul className='list-disc pl-10'>
                        <li className='py-2'>
                            Giảm 10% trên hóa đơn đối với các hóa đơn tối thiểu 300.000đ
                        </li>
                        <li className='py-2'>
                            Giảm 15% trên hóa đơn đối với các hóa đơn tối thiểu 500.000đ
                        </li>
                        <li className='py-2'>
                            Giảm 20% trên hóa đơn đối với các hóa đơn tối thiểu 1.000.000đ + phụ kiện tự chọn ( vớ, nón, kính râm )
                        </li>
                        <li className='py-2'>
                            Khi mua ở cửa hàng quý khách sẽ được tặng thẻ tích điểm hãy mang theo mỗi lần mua để tích điểm và sẽ có chương trình lấy điểm đổi quà vào 2 ngày cuối cùng mỗi tháng
                        </li>
                        <li className='py-2'>
                            Đối với mặt hàng làm quà tặng, cửa hàng sẽ miễn phí gói quà và thiệp cho quý khách
                        </li>
                    </ul>
                </div>
            </div>
            <div className='w-1/2'>
                <div className='p-5 bg-primary rounded-xl h-full content-center'>
                    <div className='rounded-full w-[300px] h-[300px] overflow-hidden mx-auto'>
                        <Image className='h-full w-full object-cover' src='/images/last-img.jpg' width={500} height={500} alt='Image'/>
                    </div>
                    <div className='p-5 rounded-xl'>
                        <h2 className='text-5xl uppercase text-center'>Cảm ơn bạn !</h2>
                        <p className='mt-6'>
                            Cảm ơn bạn đã ghé thăm trang của chúng tôi, hy vọng các sản phẩm của chúng tôi mang lại sẽ làm hài lòng các bạn. Đối với những khách hàng mới, chúng tôi mong muốn một ngày nào đó cũng sẽ được phục vụ quý vị ! 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomepageContent4