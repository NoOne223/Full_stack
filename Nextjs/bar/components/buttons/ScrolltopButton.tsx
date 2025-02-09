'use client'

import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'

const ScrolltopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        behavior: "smooth",
        });
    };

  return (
    <button
    onClick={scrollToTop}
    className={`fixed bottom-24 right-10 p-3 w-[50px] h-[50px] shadow-custom shadow-green-400/50 hover:bg-green-400 text-white rounded-full transition-opacity ${
      isVisible ? "opacity-100" : "opacity-0"
    }`}
    >
        <FontAwesomeIcon icon={faArrowUp} />
    </button>
  )
}

export default ScrolltopButton