import { SpriteSVG } from '@/assets/img/SpriteSVG';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SocialMediaProps = {
  children?: ReactNode;
  className?: string;
};
export const SocialMedia = ({ className }: SocialMediaProps) => {
  return (
    <div className="flex gap-2 flex-col p-0 m-0 mx-auto">
      <div className="font-ttChocolates500 md:text-[14px] xl:text-[16px] tracking-wide">
        Слідкуйте за <strong className="uppercase">акціями</strong> в наших
        соцмережах
      </div>
      <div className="flex justify-between ">
        <Link className="md:w-[24px] xl:text-[32px]" href="#">
          <SpriteSVG name="instagram" />
        </Link>
        <Link className="md:w-[24px] xl:text-[32px]" href="#">
          <SpriteSVG name="tic_tok" />
        </Link>
        <Link className="md:w-[24px] xl:text-[32px]" href="#">
          <SpriteSVG name="facebook" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
