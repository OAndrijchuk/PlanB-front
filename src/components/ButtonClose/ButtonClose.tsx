import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ButtonCloseProps = {
  onClick: (...args: any) => any;
  children: ReactNode;
  className?: string;
};

const ButtonClose = ({ onClick, className, children }: ButtonCloseProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        'absolute block w-6 h-6 top-10 right-4 cursor-pointer rounded-full hover:bg-extraAccent transition-colors hover:text-accent md:right-8',
        className
      )}
    >
      {children}
    </button>
  );
};

export default ButtonClose;
