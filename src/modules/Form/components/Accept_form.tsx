import { Logo } from '@/components';
import React from 'react';

export const Accept_form = () => {
  return (
    <div
      className="pt-40 pb-[166px] m-auto max-w-[237px] 
    md:pt-36 md:pb-[132px] md:max-w-[355px]"
    >
      <h2
        className="mb-4 text-xl font-semibold leading-6 text-center
      md:mb-8 md:text-2xl md:leading-none"
      >
        Ваш запит прийнятий!
      </h2>
      <p
        className="mb-[68px] text-base text-center
      md:mb-12 md:text-2xl"
      >
        Найближчим часом ми зв&apos;яжемося з Вами!
      </p>
      <Logo className="m-auto w-[110px] h-[88px]" />
    </div>
  );
};
