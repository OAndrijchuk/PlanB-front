import { SpriteSVG } from '@/assets/img/SpriteSVG';
import Contacts from '@/components/Contacts/Contacts';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenu = () => {
  return (
    <div className="pt-[50px] px-[15px] md:px-[40px]">
      <div className="pb-[66px]">
        <SocialMedia
          wrapperClassName="flex flex-row gap-6 p-0 m-0"
          textClassName="text-[14px] leading-4 w-[145px] md:w-[200px] gap-[25px]"
          mediaClassName="gap-4"
          mediaLinkClassName="w-[23px]"
          text={
            <span
              dangerouslySetInnerHTML={{
                __html:
                  'Слідкуйте за <strong class="uppercase">акціями</strong> в наших соцмережах',
              }}
            />
          }
        />
      </div>
      <nav className="pb-[65px]">
        <ul className="flex flex-col gap-6 font-ttChocolates500 font-medium text-2xl items-start">
          <Link href="/">Про нас</Link>
          <Link href="#">Послуги</Link>
          <Link href="#">Наші спеціалісти</Link>
          <Link href="#">Ціни</Link>
          <Link href="#">Відгуки</Link>
          <Link href="#">Контакти</Link>
        </ul>
      </nav>
      <Contacts
        wrapperContact="flex gap-12 p-0 m-0 md:flex-col md:items-center"
        location={
          <>
            <span className="hidden md:inline">
              м. Кам’янець-Подільский, БЦ “Розмарин” <br /> вул. Лесі Українки
              31, каб. 605
            </span>
            <span className="md:hidden">Адреса</span>
          </>
        }
      />
    </div>
  );
};

export default MobileMenu;
