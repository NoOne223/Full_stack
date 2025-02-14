import React, { useState } from 'react'
import CustomSelect from './CustomSelect'

const TimeSelect = () => {
    const setHour = ['16','17','18','19','20','21','22'];
    const setMinute = ['00','15','30','45'];
    const dayOfWeek = ['Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7', 'Chủ Nhật'];

    return (
        <div>
            <div>
                <label>Bạn muốn đặt bàn vào thứ mấy?</label>
                <CustomSelect className='max-w-44 w-full' options={dayOfWeek}/>
            </div>
            <div>
                <label>Vào lúc mấy giờ?</label>
                <div className='flex gap-x-3'>
                    <CustomSelect className='max-w-20 w-full' options={setHour}/>
                    <span>:</span>
                    <CustomSelect className='max-w-20 w-full' options={setMinute}/>
                </div>
            </div>
        </div>
    )
}

export default TimeSelect