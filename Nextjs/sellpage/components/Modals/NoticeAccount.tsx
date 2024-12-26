import React from 'react'
import CancelButton from '../Button/CancelButton';
import SecondaryButton from '../Button/SecondaryButton';
import Link from 'next/link';

interface NoticeAccountProps {
  isModalOpen: boolean; // Trạng thái mở/đóng modal
  onClose: () => void; // Hàm đóng modal
  className: string;
}

const NoticeAccount: React.FC<NoticeAccountProps> = ({ isModalOpen, onClose, className }) => {
  if (!isModalOpen) return null;
  return (
    <div className={`max-w-[900px] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5 bg-white rounded-xl z-40 shadow-only-left ${className}`}>
        <h2 className='mb-3 text-center text-2xl'>You haven't sign in yet !</h2>
        <div className='text-center'>
            <CancelButton onClick={onClose} className='me-2'>Close</CancelButton>
            <Link href='/accountpage'><SecondaryButton type='button' className='hover:bg-color-1'>Sign in</SecondaryButton></Link>
        </div>
    </div>
  )
}

export default NoticeAccount
