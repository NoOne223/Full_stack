'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import SecondaryButton from '../Button/SecondaryButton'
import CancelButton from '../Button/CancelButton'
import PasswordInput from '../ControlPass/PasswordInput'

const AccountModal = () => {
  return (
    <div className='max-w-[900px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-xl z-40 hidden  '>
      <Image className='rounded-full h-[150px] object-contain w-fit mx-auto' src='/images/boy.png' width={500} height={500} alt='Avatar'/>
      <h2 className='font-extrabold text-4xl my-4 text-center'>User Account</h2>
        <div className='mb-3'>
            <label className='text-base'>Usser name</label>
            <input className='w-full py-1 px-2 border border-black rounded focus:outline-color-1' type='text'></input>
        </div>
        <div className='mb-3'>
            <label className='text-base'>Password</label>
            <PasswordInput />
        </div>
        <div className='mb-3'>
            <button className='text-base text-color-2'>Forgot Password?</button>
            <Link className='text-base text-color-2 float-end' href='/signup'>Sign up</Link>
        </div>
        <div className='mb-3'>
            <SecondaryButton className='w-full hover:bg-color-1'>Sign In</SecondaryButton>
            <CancelButton className='w-full mt-3'>Cancel</CancelButton>
        </div>
        <p className='text-center'>Or</p>
        <div className='mt-3'>
            <button className='flex items-center justify-center w-full gap-x-2 border border-fade-black rounded-full py-1 hover:bg-gray-300 hover:border-transparent'>
                <Image className='max-h-4 object-contain w-fit' src='/images/google.png' width={500} height={500} alt='Login icon'/>
                <p className='min-w-[275px] text-start'>Sign in with Google account !</p>
            </button>
            <button className='flex items-center justify-center w-full gap-x-2 border border-fade-black rounded-full py-1 hover:bg-gray-300 hover:border-transparent mt-2'>
                <Image className='max-h-4 object-contain w-fit' src='/images/facebook.png' width={500} height={500} alt='Login icon'/>
                <p>Sign in with Facebook account !</p>
            </button>
        </div>
    </div>
  )
}

export default AccountModal
