import { SpriteSVG } from '@/assets/img/SpriteSVG';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenu = () => {
  return (
    <div className="pt-[160px] px-10">
      <div className="hidden xl:w-[168px] md:w-[139px] md:block md:flex-2">
        <SocialMedia />
      </div>
      <nav>
        <ul className="flex flex-col gap-6 font-ttChocolates500 font-medium text-2xl">
          <Link href="/">Про нас</Link>
          <Link href="#">Послуги</Link>
          <Link href="#">Наші спеціалісти</Link>
          <Link href="#">Ціни</Link>
          <Link href="#">Відгуки</Link>
          <Link href="#">Контакти</Link>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
