import React from 'react';

interface ModalButtonProps {
  onClick: () => void;
  label: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick, label }) => {
  return <button onClick={onClick}>{label}</button>;
};

export default ModalButton;
