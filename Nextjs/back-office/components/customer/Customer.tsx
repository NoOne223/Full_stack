import { faBackward, faCaretLeft, faCaretRight, faForward, faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Customer = () => {
  return (
    <div className='container mx-auto'>
        <table className='w-full border-collapse'>
            <thead>
                <tr>
                    <th className='border border-black p-2'></th>
                    <th className='border border-black p-2'>Tên khách hàng</th>
                    <th className='border border-black p-2'>ID khách hàng</th>
                    <th className='border border-black p-2'>Email khách hàng</th>
                    <th className='border border-black p-2'>Số điện thoại</th>
                    <th className='border border-black p-2'>Đánh giá</th>
                    <th className='border border-black p-2'>Chức năng</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'>Jason</td>
                    <td className='border border-black p-2'>111111</td>
                    <td className='border border-black p-2'>jason@gmail.com</td>
                    <td className='border border-black p-2'>0123456789</td>
                    <td className='border border-black p-2'>Tiềm năng</td>
                    <td className='border border-black p-2'>
                        <div className='flex'>
                            <FontAwesomeIcon className='cursor-pointer h-5 me-2' icon={faPenToSquare} />
                            <FontAwesomeIcon className='cursor-pointer h-5 me-2' icon={faTrashCan} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'>Jesica</td>
                    <td className='border border-black p-2'>222222</td>
                    <td className='border border-black p-2'>jesica@gmail.com</td>
                    <td className='border border-black p-2'>0123456789</td>
                    <td className='border border-black p-2'>Thường</td>
                    <td className='border border-black p-2'>
                        <div className='flex'>
                            <FontAwesomeIcon className='h-5 cursor-pointer me-2' icon={faPenToSquare} />
                            <FontAwesomeIcon className='h-5 cursor-pointer me-2' icon={faTrashCan} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'>Lora</td>
                    <td className='border border-black p-2'>333333</td>
                    <td className='border border-black p-2'>lora@gmail.com</td>
                    <td className='border border-black p-2'>0123456789</td>
                    <td className='border border-black p-2'>Vip</td>
                    <td className='border border-black p-2'>
                        <div className='flex'>
                            <FontAwesomeIcon className='h-5 cursor-pointer me-2' icon={faPenToSquare} />
                            <FontAwesomeIcon className='h-5 cursor-pointer me-2' icon={faTrashCan} />
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className='border border-black p-2'></td>
                    <td className='border border-black p-2'>Atus</td>
                    <td className='border border-black p-2'>444444</td>
                    <td className='border border-black p-2'>atus@gmail.com</td>
                    <td className='border border-black p-2'>0123456789</td>
                    <td className='border border-black p-2'>Thân thiết</td>
                    <td className='border border-black p-2'>
                        <div className='flex'>
                            <FontAwesomeIcon className='h-5 cursor-pointer me-2' icon={faPenToSquare} />
                            <FontAwesomeIcon className='h-5 cursor-pointer me-2' icon={faTrashCan} />
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
        <div>
            <button><FontAwesomeIcon icon={faBackward} /></button>
            <button><FontAwesomeIcon icon={faCaretLeft} /></button>
            <ul></ul>
            <button><FontAwesomeIcon icon={faCaretRight} /></button>
            <button><FontAwesomeIcon icon={faForward} /></button>
        </div>
    </div>
  )
}

export default Customer
