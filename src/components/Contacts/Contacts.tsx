import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React, { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

type ContactsProps = {
  children?: ReactNode;
  wrapperContact?: string;
  textClassName?: string;
  mediaClassName?: string;
  linkClassName?: string;
  location?: ReactNode;
};

const Contacts = ({
  wrapperContact,
  textClassName,
  mediaClassName,
  location,
}: ContactsProps) => {
  return (
    <div className={twMerge('', wrapperContact)}>
      <div className="flex gap-[13px] ">
        <p className="w-[19px]">
          <SpriteSVG name="marker" />
        </p>
        {/* м. Кам’янець-Подільский, БЦ “Розмарин” <br />
          вул. Лесі Українки 31, каб. 605 */}
        {location}
      </div>
      <div className="flex gap-[13px] items-center">
        <p className="w-[18px]">
          <SpriteSVG name="phone_call" />
        </p>
        +38 068 126 8087
      </div>
    </div>
  );
};

export default Contacts;
