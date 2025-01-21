import React from 'react';

interface ModalAccountProps{
  onClose: () => void;
}

const ModalAccount: React.FC<ModalAccountProps> = ({ onClose }) => {

  return (
    <div>
      <h2>This is Modal 1</h2>
      <button onClick={onClose}>Close modal</button>
    </div>
  );
};

export default ModalAccount;
