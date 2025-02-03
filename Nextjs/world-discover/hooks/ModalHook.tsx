import { useState, useEffect } from 'react';

interface UseModalReturn {
  isClosing: boolean;
  handleClose: () => void;
}

export const useModal = (onClose: () => void, animationDuration = 300): UseModalReturn => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, animationDuration); // Phải khớp với thời gian animation
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { isClosing, handleClose };
};
