import { faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const AddtoCart = () => {
  return (
    <button className='rounded-sm w-full py-2 px-4 bg-secondary text-white hover:bg-thirdary cursor-pointer border border-transparent'>
      <FontAwesomeIcon className='me-2' icon={faCartPlus} />
      Thêm vào giỏ
    </button>
  )
}

export default AddtoCart
