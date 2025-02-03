import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import ModalButton from '../buttons/ModalButton'
import ModalAccount from '../modals/ModalAccount';
const Header = () => {
    const [activeModal, setActiveModal] = useState<string | null>(null); // null khi không có modal nào được mở
    
    const openModal = (modalName: string) => {
      setActiveModal(modalName);
    };
  
    const closeModal = (): void => {
      setActiveModal(null);
    };
    
  return (
    <div>
        <div className='container mx-auto p-3 flex items-center justify-between'>
          <Link href='/'><Image className='w-fit h-16 object-contain' src='/images/pagelogo.png' width={500} height={500} alt='Logo'/></Link>
          <ModalButton onClick={() => openModal('modalaccount')}>Login</ModalButton>
          {activeModal === 'modalaccount' && <ModalAccount onClose={closeModal} />}
        </div>
    </div>
  )
}

export default Header