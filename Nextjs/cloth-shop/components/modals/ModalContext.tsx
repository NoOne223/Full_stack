'use client'
import { createContext, useContext, useState, ReactNode, useEffect } from "react";

interface ModalContextType {
  activeModal: string | null;
  fadeClass: string;
  openModal: (id: string) => void;
  closeModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [activeModal, setActiveModal] = useState<string | null>(null);
  const [fadeClass,setFadeClass] = useState('');

  const openModal = (id: string) => {
    setActiveModal(id);
    setFadeClass('fade-in');
    document.documentElement.classList.add('overflow-hidden');
  };

  const closeModal = () => {
    setFadeClass('fade-out');
    setTimeout(() => {
      setActiveModal(null);
      setFadeClass('');
      document.documentElement.classList.remove('overflow-hidden');
    }, 200);
  };

  return (
    <ModalContext.Provider value={{ activeModal, fadeClass, openModal, closeModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a ModalProvider");
  }
  return context;
};
