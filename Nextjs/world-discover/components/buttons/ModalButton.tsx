import React from 'react';

interface ModalButtonProps {
  onClick: () => void;
  children: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick, children }) => {
  return <button className='text-white bg-black py-2 min-w-[150px] rounded-lg' onClick={onClick}>{children}</button>;
};

export default ModalButton;
