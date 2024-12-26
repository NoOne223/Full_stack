import React from 'react';
import './button.css';

interface CancelButtonProps {
  children: React.ReactNode;
  className?: string; // className không bắt buộc
  onClick?: () => void; // onClick không bắt buộc
}

const CancelButton: React.FC<CancelButtonProps> = ({ children, className = '', onClick = () => {} }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-300 hover:bg-gray-500 text-white font-bold min-w-[150px] py-2 px-3 rounded-md uppercase ${className}`}
    >
      {children}
    </button>
  );
};

export default CancelButton;