'use client'

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import './sidebar.css';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import SidebarButton from '../Button/SidebarButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faSquareFacebook } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

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
          onClick={() => setIsOpen(false)} // Đóng sidebar khi nhấp vào overlay
        ></div>
      )}

      {/* Sidebar */}
      <div
        className={`fixed shadow-only-left pt-7 bg-white max-w-64 h-full z-50 transition-all duration-500 ${
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
                  className={`p-4 block font-bold ${
                    pathname === '/' ? 'bg-color-2 text-white' : ''
                  }`}
                  href="/"
                >
                  Home
                </Link>
              </li>
              <li className="hover:bg-color-2 hover:text-white mb-7">
                <Link
                  className={`p-4 block font-bold ${
                    pathname === '/templates' ? 'active' : ''
                  }`}
                  href="/templates"
                >
                  Templates
                </Link>
              </li>
              <li className="hover:bg-color-2 hover:text-white mb-7">
                <Link
                  className={`p-4 block font-bold ${
                    pathname === '/favorite' ? 'active' : ''
                  }`}
                  href="/favorite"
                >
                  Your Favorite
                </Link>
              </li>
              <li className="hover:bg-color-2 hover:text-white mb-7">
                <Link
                  className={`p-4 block font-bold ${
                    pathname === '/transaction' ? 'active' : ''
                  }`}
                  href="/transaction"
                >
                  Transaction history
                </Link>
              </li>
            </ul>
          </nav>
          <div className="block">
            <button
              className="p-2 inline-block w-1/2 text-center hover:bg-color-2 hover:text-white"
            >
              Account
            </button>
            <button
              className="p-2 inline-block w-1/2 text-center hover:bg-color-2 hover:text-white"
            >
              Contact
            </button>
            <div>
                <ul>
                    <li>
                        <FontAwesomeIcon icon={faPhone} />
                        <a href='tel:0982582754'>0982582754</a>
                    </li>
                    <li>
                        <FontAwesomeIcon icon={faSquareFacebook} />
                        <Link href='https://coolors.co/palettes/popular/turquoise' passHref>
                            <a target='_blank'></a>
                        </Link>
                    </li>
                    <li>
                    <FontAwesomeIcon icon={faInstagram} />
                    </li>
                </ul>
            </div>
          </div>
          <SidebarButton isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
