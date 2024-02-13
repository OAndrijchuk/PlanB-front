import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionTitleProps = {
  children: ReactNode;
  className?: string;
};

const SectionTitle = ({ children, className }: SectionTitleProps) => {
  return (
    <h1
      className={twMerge(
        `text-stone-50 text-7xl font-normal font-caveat400 leading-[72px]`,
        className
      )}
    >
      {children}
    </h1>
  );
};

export default SectionTitle;
