'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './sidebar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarButton from '../Button/SidebarButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin, faSquareFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import NoticeAccount from '../Modals/NoticeAccount';


const Sidebar = () => {
  const pathname = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const [showUp, setShowUp] = useState(false);
  const showupToogle = () => setShowUp(!showUp)

  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);


  // Ngăn body scroll khi mở sidebar
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);  

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => {
            setIsOpen(false);
            setModalOpen(false)
          }}// Đóng sidebar khi nhấp vào overlay
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed top-0 shadow-only-left pt-7 bg-white max-w-64 h-full z-50 transition-all duration-500 ${
          isOpen ? 'right-0' : '-right-[260px]'
        }`}
      >
        <div className="relative flex flex-col justify-between h-full">
          <div>
            <Link href="">
              <Image
                className="h-[65px] object-contain"
                src="/images/logo.png"
                width={500}
                height={500}
                alt="Logo page"
              />
            </Link>
          </div>
          <nav>
            <ul>
              <li className="hover:bg-color-2 hover:text-white mb-7">
                <Link
                  className={`p-4 block  ${
                    pathname === '/' ? 'bg-color-2 text-white' : ''
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="hover:bg-color-2 hover:text-white mb-7">
                <Link
                  className={`p-4 block  ${
                    pathname === '/templates' ? 'bg-color-2 text-white' : ''
                  }`}
                  href="/templates"
                >
                  Templates
                </Link>
              </li>
              <li className="hover:bg-color-2 hover:text-white mb-7">
                <Link
                  className={`p-4 block  ${
                    pathname === '/favorite' ? 'active' : ''
                  }`}
                  href="/favorite"
                >
                  Your Favorite
                </Link>
              </li>
              <li className="hover:bg-color-2 hover:text-white mb-7">
                <Link
                  className={`p-4 block  ${
                    pathname === '/transaction' ? 'active' : ''
                  }`}
                  href="/transaction"
                >
                  Transaction history
                </Link>
              </li>
              <li className="hover:bg-color-2 hover:text-white mb-7">
                <Link
                  className={`p-4 block  ${
                    pathname === '/join' ? 'active' : ''
                  }`}
                  href="/transaction"
                >
                  Join our company
                </Link>
              </li>
            </ul>
          </nav>
          <div className="block relative z-10">
            <button
              className="p-2 inline-block w-1/2 bg-white text-center hover:bg-color-2 hover:text-white"
              onClick={openModal}
              aria-expanded={isModalOpen}
            >
              Account
            </button>
            <button
              onClick={showupToogle}
              className="p-2 inline-block w-1/2 bg-white text-center hover:bg-color-2 hover:text-white"
            >
              Contact
            </button>
            <div className={`p-2 absolute -top-[150px] shadow-top w-full left-0 bg-white -z-10 transition-all duration-500 ${showUp ? '-top-[195px]' : 'top-0'}`}>
                <ul>
                    <li className='py-2'>
                        <Link className='hover:text-color-2' href='' target="_blank">
                        <FontAwesomeIcon className='me-2' icon={faYoutube} />Youtube
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link className='hover:text-color-2' href='' target="_blank">
                        <FontAwesomeIcon className='me-2' icon={faLinkedin} />Linkedin
                        </Link>
                    </li>
                    <li className='py-2'>
                        <Link className='hover:text-color-2' href='' target="_blank">
                        <FontAwesomeIcon className='me-2' icon={faSquareFacebook} />Facebook
                        </Link>
                    </li>
                    <li className='py-2'>
                      <Link className='hover:text-color-2' href='' target="_blank">
                      <FontAwesomeIcon className='me-2' icon={faInstagram} />Instagram
                      </Link>
                    </li>
                </ul>
            </div>
          </div>
          <SidebarButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>
      <NoticeAccount className={`transition-all duration-500 ${isModalOpen ? 'scale-100' : 'scale-0'}`} isModalOpen={isModalOpen} onClose={closeModal} />
    </>
  );
};

export default Sidebar;
