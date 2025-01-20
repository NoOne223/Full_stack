import React from 'react';

interface Modal2Props{
  onClose: () => void;
}

const Modal2: React.FC<Modal2Props> = ({ onClose }) => {

  return (
    <div>
      <h2>This is Modal 2</h2>
      <button onClick={onClose}>Close modal</button>
    </div>
  );
};

export default Modal2;
