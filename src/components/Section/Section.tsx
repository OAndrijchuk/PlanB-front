import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section = ({ children, className }: SectionProps) => {
  return (
    <section className={twMerge(`pt-[120px] xl:pt-[144px]`, className)}>
      {children}
    </section>
  );
};

export default Section;
