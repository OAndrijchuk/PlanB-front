import { SpriteSVG } from '@/assets/img/SpriteSVG';
import Link from 'next/link';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type SocialMediaProps = {
  children?: ReactNode;
  wrapperClassName?: string;
  textClassName?: string;
  mediaClassName?: string;
  linkClassName?: string;
  text?: ReactNode;
  mediaLinkClassName?: string;
};

export const SocialMedia = ({
  wrapperClassName,
  textClassName,
  mediaClassName,
  text,
  mediaLinkClassName,
}: SocialMediaProps) => {
  return (
    <div className={twMerge('m-auto', wrapperClassName)}>
      <div
        className={twMerge(
          'font-ttChocolates500 md:text-[14px] xl:text-[16px] tracking-wide',
          textClassName
        )}
      >
        {/* Слідкуйте за <strong className="uppercase">акціями</strong> в наших
        соцмережах */}
        {text}
      </div>
      <div className={twMerge('flex justify-between', mediaClassName)}>
        <Link
          className={twMerge('md:w-[24px] xl:text-[32px]', mediaLinkClassName)}
          href="#"
        >
          <SpriteSVG name="instagram" />
        </Link>
        <Link
          className={twMerge('md:w-[24px] xl:text-[32px]', mediaLinkClassName)}
          href="#"
        >
          <SpriteSVG name="tic_tok" />
        </Link>
        <Link
          className={twMerge('md:w-[24px] xl:text-[32px]', mediaLinkClassName)}
          href="#"
        >
          <SpriteSVG name="facebook" />
        </Link>
      </div>
    </div>
  );
};

export default SocialMedia;
