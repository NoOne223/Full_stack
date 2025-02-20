import React from 'react'
import './content.css'

const Content1 = () => {
  return (
    <div className='banner-1 relative'>
      <div className='container m-auto p-3 h-fit absolute top-0 bottom-0 left-0 right-0'>
        <h1 className='text-center font-bold uppercase text-6xl leading-tight'>Những thứ tốt trong tự nhiên <br></br> đều chầm chậm</h1>
        <div className='flex items-center justify-center gap-x-5 mt-3'>
          <div>
            <p>Mặt trời chầm chậm mọc</p>
          </div>
          <div>
            <p>Hoa nở từng bông</p>
          </div>
          <div>
            <p>Lúa chầm chậm chín</p>
          </div>
        </div>
        <p  className='text-center text-2xl mt-3 italic'>Vì thế những nỗ lực của bạn không phải chưa đạt được thành quả mà thành quả sẽ từ từ đến <br></br> nếu bạn không ngừng nỗ lực</p>
      </div>
    </div>
  )
}

export default Content1
