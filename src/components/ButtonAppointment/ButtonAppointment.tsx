'use client';
import React, { useState } from 'react';

const ButtonAppointment = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button
        type="button"
        onClick={() => setShowModal(true)}
        className="py-4 min-w-[18rem] text-[1.5rem] leading-6 antialiased text-center bg-red-200 shadow-custom rounded-custom cursor-pointer hover:bg-red-100 active:bg-red-300
      md:min-w-[26.25rem]"
      >
        Записатися
      </button>
    </>
  );
};

export default ButtonAppointment;
