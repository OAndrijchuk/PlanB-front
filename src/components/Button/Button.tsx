'use client';
import React, { useEffect, useState } from 'react';

const Button = () => {
  const [showModal, setShowModal] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

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
      className={`fixed right-4 bottom-10 w-[80px] h-[78px] text-black text-base font-medium leading-none bg-red-200 rounded-full cursor-pointer hover:bg-red-100 active:bg-red-300
      md:right-8
      ${isVisible ? 'opacity-100' : 'opacity-0'}
      `}
    >
      Онлайн запис
    </button>
  );
};

export default Button;
