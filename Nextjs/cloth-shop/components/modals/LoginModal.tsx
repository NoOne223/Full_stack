'use client'
import React, { useEffect, useState } from 'react'
import ControlLogin from '../buttons/ControlLogin'
import Image from 'next/image'
import CloseModal from '../buttons/CloseModal'
import { useModal } from './ModalContext'

interface ModalProps {
  modalId: string;
}

const LoginModal = ({ modalId }: ModalProps) => {
  const { activeModal } = useModal();
  const [fadeClass, setFadeClass] = useState('');

  useEffect(() => {
    setFadeClass('fade-in');
  }, []);
  
  if (activeModal !== modalId) return null;

  return (
    <div id='LoginModal' className='fixed top-0 left-0 w-full h-full bg-black/50 z-40'>
      <div className='bg-white p-5 max-w-[400px] w-full h-fit absolute top-0 left-0 right-0 bottom-0 m-auto rounded-xl'>
        <div>
          <Image className='mx-auto' src='/images/profile.png' width={100} height={100} alt='User avt'/>
          <p className='font-bold text-2xl text-center mt-2'>User name</p>
        </div>
        <p className='text-red-500 italic text-base my-3 hidden'>Tài khoản hoặc mật khẩu không đúng !</p>
        <div>
          <label className='text-gray-500 font-semibold'>Tài khoản</label>
          <input className='w-full border border-gray-400 rounded-xs p-2 mb-2'></input>
          <label className='text-gray-500 font-semibold'>Mật khẩu</label>
          <input className='w-full border border-gray-400 rounded-xs p-2'></input>
        </div>
        <button className='mt-3 text-blue-400 cursor-pointer hover:underline'>Đăng ký tài khoản</button>
        <p className='font-semibold text-center my-6'>Hoặc</p>
        <ControlLogin />
        <CloseModal className='px-5 py-2 w-full mt-2 hover:bg-gray-300 hover:text-gray-700 rounded-sm'>Đóng</CloseModal>
      </div>
    </div>
  )
}

export default LoginModal