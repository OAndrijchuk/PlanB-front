import { SpriteSVG } from '@/assets/img/SpriteSVG';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import Link from 'next/link';
import React, { useState } from 'react';

const MobileMenu = () => {
  // const handleKeyDown = (event: KeyboardEvent) => {
  //   if (event.key === 'Escape') {
  //     onClose();
  //   }
  // };

  // const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
  //   if (event.target === event.currentTarget) {
  //     console.log(123);
  //   }
  // };

  return (
    <div className="md:w-[500px] md:h-[900px] w-screen h-screen fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-95 z-50 overflow-y-auto p-4">
      <button className="w-6 h-6">
        <SpriteSVG name="close" />
      </button>
      <div className="hidden xl:w-[168px] md:w-[139px] md:block md:flex-2">
        <SocialMedia />
      </div>
      <nav>
        <ul className="flex flex-col">
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
