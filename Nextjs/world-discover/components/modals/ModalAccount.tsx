import { useModal } from '@/hooks/ModalHook';
import React from 'react';


interface ModalAccountProps {
  onClose: () => void;
}

const ModalAccount: React.FC<ModalAccountProps> = ({ onClose }) => {
  const { isClosing, handleClose } = useModal(onClose);

  return (
    <div
      onClick={handleClose}
      className="absolute bg-black bg-opacity-50 w-full h-full left-0 top-0"
    >
      <div
        className={`modal-content ${
          isClosing ? 'exit' : 'show'
        } bg-white p-5 max-w-lg w-full h-fit left-0 right-0 absolute mx-auto rounded-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold mb-4">Login</h2>
        <button onClick={handleClose} className="px-4 py-2 bg-red-500 text-white rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ModalAccount;
