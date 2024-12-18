import React from 'react'
import './button.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';

interface SidebarButtonProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ isOpen, toggleSidebar }) => {
  return (
    <button 
    aria-expanded={isOpen} 
    onClick={toggleSidebar} 
    className='absolute top-1/2 border-l border-t border-b h-14 py-1 px-2 -left-[27px] bg-color-2 text-white border-transparent'>
      <FontAwesomeIcon icon={isOpen ? faCaretRight : faCaretLeft} />
    </button>
  )
}

export default SidebarButton
