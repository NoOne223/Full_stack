import React from 'react'

const FooterForm = () => {
  return (
    <form>
        <div className='my-5'>
            <input className='w-full p-2 bg-transparent border-b border-b-white focus:outline-none' type='text' placeholder='Name'></input>
        </div>
        <div className='my-5'>
            <input className='w-full p-2 bg-transparent border-b border-b-white focus:outline-none' type='email' placeholder='Email'></input>
        </div>
        <div className='my-5'>
            <input className='w-full p-2 bg-transparent border-b border-b-white focus:outline-none' type='text' placeholder='Phone number'></input>
        </div>
        <div className='my-5'>
            <input className='w-full p-2 bg-transparent border-b border-b-white focus:outline-none' type='text' placeholder='What you want'></input>
        </div>
        <button type='submit' className='border-2 border-white min-w-[150px] p-1 rounded-full hover:bg-white hover:text-black'>Send request</button>
    </form>
  )
}

export default FooterForm