import React from 'react'
import SubmitButton from '../button/SubmitButton'

const ContactForm = () => {
  return (
    <div>
        <form>
            <input type='text' placeholder='Enter your Name' className='p-2 w-full border border-black my-4 focus:rounded-none focus:border-title focus:outline-none'></input>
            <input type='text' placeholder='Enter your Phone number' className='p-2 w-full border border-black my-4 focus:rounded-none focus:border-title focus:outline-none'></input>
            <input type='text' placeholder='Enter your Email' className='p-2 w-full border border-black my-4 focus:rounded-none focus:border-title focus:outline-none'></input>
            <input type='text' placeholder='Enter your Address' className='p-2 w-full border border-black my-4 focus:rounded-none focus:border-title focus:outline-none'></input>
            <SubmitButton>Confirm</SubmitButton>
        </form>
    </div>
  )
}

export default ContactForm