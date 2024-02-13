import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={twMerge(`container mx-auto px-4 md:px-8 xl:px-36`, className)}
    >
      {children}
    </div>
  );
};

export default Container;
