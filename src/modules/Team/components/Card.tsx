import { Master } from '@/types';
import Image from 'next/image';
import React from 'react';

export type CardProps = {
  master: Master;
};

const blurDataURL = 'data:image/png;base64';

const Card = ({ master }: CardProps) => {
  const { name, experience, position, img } = master;

  return (
    <li
      className="relative h-[384px] w-[288px]
     md:flex-row h-[328px] w-[232px]
      xl:flex-row h-[508px] w-[364px]"
    >
      <Image
        src={img}
        alt={name}
        quality={90}
        fill={true}
        loading="lazy"
        className="rounded-xl w-[232px] h-[327.716px] flex-shrink-0"
      />
      <div className="absolute w-full bottom-0 flex items-center flex-col gap-3 pt-[16px] pb-[24px] rounded-xl bg-red-200">
        <p className="font-ttChocolates500 text-[18px] text-stone-900  font-semibold leading-[111%]">
          {name}
        </p>
        <p className="font-ttChocolates500 text-[14px] text-stone-900  font-semibold leading-[111%]">
          {position}
        </p>
        <p className="font-ttChocolates500 text-[14px] text-stone-900  font-semibold leading-[111%]">
          Досвід: {experience} років
        </p>
      </div>
    </li>
  );
};

export default Card;
