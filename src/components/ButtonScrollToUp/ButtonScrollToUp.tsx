'use client';
import React from 'react';
import { twMerge } from 'tailwind-merge';
import useVisibility from '@/hooks/useVisibility';
import { SpriteSVG } from '@/assets/img/SpriteSVG';

const ButtonScrollToUp: React.FC = () => {
  const isVisible = useVisibility(500);

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
      className={twMerge(`fixed right-4 bottom-52 w-[36px] h-[48px]  bg-red-200 opacity-50 rounded-custom cursor-pointer shadow-up hover:bg-red-100 focus:bg-red-100 active:bg-red-300
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
