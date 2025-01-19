import React from 'react';


interface ModalProps{
    onClose: () => void;
}

const Modal1: React.FC<ModalProps> = ({ onClose }) => {
  return (
    <div>
      <h2>This is Modal 1</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default Modal1;
