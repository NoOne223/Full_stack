import React from 'react'

const Experient = () => {
  return (
    <div className='container mx-auto p-3'>
        <div className='flex justify-center'>
            <div className='border-r-2 border-black p-3 max-w-[525px] w-full'>
              <h2 className='text-6xl text-end leading-snug'>Em có <br></br> <strong>2 năm kinh nghiệm</strong> <br></br> vị trí Frontend</h2>
            </div>
            <div className='max-w-[525px] w-full border-l-2 border-black p-3'>
              <h2 className='text-4xl font-bold mb-5'>DFM Engineering</h2>
              <ul>
                <li>
                  <p>Thâm niên : 2 năm ( 2023 - 2024 )</p>
                </li>
                <li>
                  <p>Vị trí : Front-End Developer</p>
                </li>
                <li>
                  <p>Mô tả công việc : Xây dựng template theo Figma, chuyển thiết kế thành mã nguồn HTML, CSS, JavaScript và tối ưu giao diện. Đảm bảo responsive, tương thích trình duyệt, tối ưu hiệu suất và cải thiện UX/UI.</p>
                </li>
              </ul>
            </div>
        </div>
    </div>
  )
}

export default Experient