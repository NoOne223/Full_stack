import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SearchBar = () => {
  return (
    <div className='relative'>
      <input placeholder='Tìm kiếm' className='rounded-sm w-full py-1 px-2 border border-gray-400'></input>
      <button className='bg-primary text-white rounded-sm w-auto px-3 h-full cursor-pointer hover:bg-thirdary absolute top-0 right-0 bottom-0 my-auto'><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
    </div>
  )
}

export default SearchBar
