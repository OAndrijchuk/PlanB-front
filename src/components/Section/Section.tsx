import React, { ReactNode, CSSProperties } from 'react';
import { twMerge } from 'tailwind-merge';

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  style?: CSSProperties;
};

const Section = ({ children, className, id, style }: SectionProps) => {
  return (
    <section
      className={twMerge(`pt-[120px] xl:pt-36`, className)}
      style={style}
    >
      {children}
    </section>
  );
};

export default Section;
