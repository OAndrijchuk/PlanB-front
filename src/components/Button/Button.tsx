'use client';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const Button: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const toggleVisibility = () => {
      window.scrollY > 500 ? setIsVisible(true) : setIsVisible(false);
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={() => setShowModal(true)}
      type="button"
      className={twMerge(`fixed right-4 bottom-10 w-[80px] h-[78px] text-black text-base font-medium leading-none bg-red-200 rounded-full cursor-pointer hover:bg-red-100 active:bg-red-300
      md:right-8
      ${isVisible ? 'visible' : 'hidden'}
      `)}
    >
      Онлайн запис
    </button>
  );
};

export default Button;
