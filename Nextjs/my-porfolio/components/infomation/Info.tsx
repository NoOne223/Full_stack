import Image from 'next/image'
import React from 'react'

const Info = () => {
  return (
    <>
      <div className='container mx-auto p-3'>
        <div className='flex items-center'>
          <div className='w-1/2'>
            <h2 className='text-6xl'>
              Xin chào, tên em là <br></br> <strong>Lê Hoàng Nam</strong>
            </h2>
            <p className='italic my-5'>03/09/2001</p>
            <div className='flex gap-x-10'>
              <div className='w-1/2'>
                <h3 className='text-4xl font-semibold mb-2'>Mô tả bản thân</h3>
                <p>
                Em là một người năng động, luôn tìm tòi và cập nhật những xu hướng mới trong phát triển giao diện web. Với tính cách hòa đồng, em dễ dàng làm việc nhóm, 
                trao đổi ý tưởng và phối hợp hiệu quả. Đặc biệt, em có sự sáng tạo, luôn tìm cách tối ưu UI/UX để mang đến trải nghiệm tốt nhất cho người dùng.
                </p>
              </div>
              <div className='w-1/2'>
                <h3 className='text-4xl font-semibold mb-2'>Đam mê</h3>
                <p>
                Với trí tưởng tượng phong phú em cực kỳ thích tự xây dựng một template web đẹp và sáng tạo. Em luôn học hỏi thêm những điều mới như các animation, cách để một trang 
                web trở nên mượt mà cũng như học thêm các thư viện mới. Và em luôn muốn được làm việc trong một môi trường sáng tạo và chuyên nghiệp.
                </p>
              </div>
            </div>
          </div>
          <div className='w-1/2'>
            <Image className='w-full' src='/images/man.png' width={500} height={500} alt='User Image'/>
          </div>
        </div>
      </div>
      <div className='bg-black'>
        <div className='container mx-auto px-3 py-8'>
          <h2 className='text-white text-6xl font-bold text-center mb-5'>Ngoại ngữ</h2>
          <div className='flex justify-center gap-x-10'>
            <div className='text-white border border-transparent rounded-3xl shadow-md shadow-gray-500 p-4 content-center max-w-[400px] w-full text-center'>
              <Image src='/images/english.png' className='max-h-32 w-full object-contain' width={500} height={500} alt='Image'></Image>
              <h2 className='text-4xl font-bold uppercase my-3'>Tiếng Anh</h2>
              <p>Toeic 755 ( 4/2024 )</p>
            </div>
            <div className='text-white border border-transparent rounded-3xl shadow-md shadow-gray-500 p-4 content-center max-w-[400px] w-full text-center'>
              <Image src='/images/japanese.png' className='max-h-32 w-full object-contain' width={500} height={500} alt='Image'></Image>
              <h2 className='text-4xl font-bold uppercase my-3'>Tiếng Nhật</h2>
              <p>Trình độ tương đương N3</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Info