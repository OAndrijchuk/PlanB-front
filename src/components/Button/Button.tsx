'use client';
import React, { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { Modal } from '..';
import { Feedback } from '@/modules';
import useVisibility from '@/hooks/useVisibility';

const Button: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility(500);
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        type="button"
        className={twMerge(`fixed right-4 bottom-10 w-[80px] h-[78px] text-black text-base font-medium leading-none bg-red-200 rounded-full cursor-pointer shadow-online hover:bg-red-100 focus:bg-red-100 active:bg-red-300
      md:right-8
      ${isVisible ? 'visible' : 'hidden'}
      `)}
      >
        Онлайн запис
      </button>
      {isOpen && (
        <Modal isOpen={isOpen} onClose={toggleModal}>
          <Feedback />
        </Modal>
      )}
    </>
  );
};

export default Button;
