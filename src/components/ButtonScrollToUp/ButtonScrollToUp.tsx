'use client';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

const ButtonScrollToUp: React.FC = () => {
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

  const scrollToTop = () => {
    isVisible &&
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
  };
  return (
    <button
      onClick={scrollToTop}
      type="button"
      className={twMerge(`fixed right-4 bottom-52 w-[36px] h-[48px]  bg-red-200 opacity-50 rounded-custom cursor-pointer hover:bg-red-100 active:bg-red-300
      md:right-8
      xl:right-16
      ${isVisible ? 'visible' : 'hidden'}
      `)}
    >
      <SpriteSVG name="chevron" />
    </button>
  );
};

export default ButtonScrollToUp;
