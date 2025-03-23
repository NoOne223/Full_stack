'use client'
import { createContext, useContext, useState, ReactNode } from "react";
import LoginModal from "./LoginModal";
import AccountModal from "./AccountModal";

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

  const renderModal = () => {
    switch (activeModal) {
      case "LoginModal":
        return <LoginModal modalId="LoginModal" />;
      case "AccountModal":
        return <AccountModal modalId="AccountModal" />;
      default:
        return null;
    }
  };

  return (
    <ModalContext.Provider value={{ activeModal, fadeClass, openModal, closeModal }}>
      {children}
      {renderModal()}
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
