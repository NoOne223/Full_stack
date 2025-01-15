import React from 'react'

const ContactForm = () => {
  return (
    <div className='bg-white max-w-2xl p-5'>
        <h2 className='text-6xl font-bold mb-5'>Contact us</h2>
        <form>
            <input className='w-full bg-transparent border-b-2 border-gray-400 focus:outline-none py-2 px-3 mb-3' placeholder='Your name'></input>
            <input className='w-full bg-transparent border-b-2 border-gray-400 focus:outline-none py-2 px-3 mb-3' placeholder='Your phone or email'></input>
            <textarea className='w-full bg-transparent border-b-2 border-gray-400 focus:outline-none py-2 px-3 mb-3' placeholder='Your problems'></textarea>
            <button type='button' className='border border-black rounded-full min-w-[200px] hover:bg-black hover:text-white'>Send</button>
        </form>
    </div>
  )
}

export default ContactForm