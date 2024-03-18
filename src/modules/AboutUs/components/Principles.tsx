import React from 'react';
import { Subtitle } from '@/components';

interface PrinciplesProps {
  items: {
    title: string;
    details: {
      subtitle: string;
      description: string;
    }[];
  };
}
export const Principles: React.FC<PrinciplesProps> = ({ items }) => {
  return (
    <div className="">
      <Subtitle>{items.title}</Subtitle>
      <ul className="flex flex-col justify-center items-center gap-4">
        {items.details.map((detail, index) => (
          <li key={index}>
            <h3 className="text-xl font-bold ">
              {detail.subtitle}
              <span className="text-base font-medium block">
                {detail.description}
              </span>
            </h3>
          </li>
        ))}
      </ul>
    </div>
  );
};
