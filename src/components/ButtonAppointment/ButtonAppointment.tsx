'use client';
import React, { useState } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonAppointmentProps = {
  type: 'submit' | 'button';
  children: string;
  onClick?: () => void;
};

const ButtonAppointment: React.FC<ButtonAppointmentProps> = ({
  type,
  children,
  onClick,
}) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        type={type}
        onClick={onClick}
        className={twMerge(`py-4 min-w-[18rem] text-2xl leading-6 font-medium text-center text-stone-900 bg-red-200 shadow-custom rounded-custom cursor-pointer hover:bg-red-100 active:bg-red-300
      md:min-w-[26.25rem]`)}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonAppointment;
