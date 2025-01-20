import React from 'react';

interface Modal1Props{
  onClose: () => void;
}

const Modal1: React.FC<Modal1Props> = ({ onClose }) => {

  return (
    <div>
      <h2>This is Modal 1</h2>
      <button onClick={onClose}>Close modal</button>
    </div>
  );
};

export default Modal1;
