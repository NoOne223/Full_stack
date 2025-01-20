import React from 'react';

interface ModalButtonProps {
  onClick: () => void;
  children: string;
}

const ModalButton: React.FC<ModalButtonProps> = ({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
};

export default ModalButton;
