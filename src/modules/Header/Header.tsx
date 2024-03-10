'use client';
import React, { useState } from 'react';
import { MobileMenu } from './components';
import Link from 'next/link';
import { Container, SectionTitle, Section, Logo, Modal } from '@/components';
import HeaderSVG from './HeaderSVG';
import { SpriteSVG } from '@/assets/img/SpriteSVG';
import SocialMedia from '@/components/SocialMedia/SocialMedia';
import useVisibility from '@/hooks/useVisibility';
import { twMerge } from 'tailwind-merge';

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility(50);
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <header
      className={`bg-stone-50 text-stone-900 bg-header sticky top-0 left-0 
    mx-auto px-4 md:px-8 xl:px-36
    pt-6 md:pt-8 xl:pt-8    
    pb-4 md:pb-6 xl:pb-4 z-50 ${isVisible ? 'hidden' : 'visible'}`}
    >
      <div className="max-w-[1440px] flex items-center justify-between mx-auto">
        <button
          onClick={() => setIsOpen(true)}
          type="button"
          className="w-10 h-10 flex-none xl:hidden md:w-16 md:h-16"
        >
          <HeaderSVG name="burgerMenu" />
        </button>
        {isOpen && (
          <Modal isOpen={isOpen} onClose={toggleModal}>
            <MobileMenu />
          </Modal>
        )}
        <div className="hidden xl:flex flex-col gap-[8px] md:w-[350px] font-ttChocolates500 text-[16px] font-medium leading-6 tracking-wider">
          <div className="flex gap-[13px] flex-start">
            <p className="w-[19px]">
              <SpriteSVG name="marker" />
            </p>
            м. Кам’янець-Подільский, БЦ “Розмарин” <br />
            вул. Лесі Українки 31, каб. 605
          </div>
          <div className="flex gap-[13px]">
            <p className="w-[18px]">
              <SpriteSVG name="phone_call" />
            </p>
            +38 068 126 8087
          </div>
        </div>
        <Logo className="w-[66px] h-[54px] flex-1 md:w-[126px] md:h-[100px]" />
        <div className="hidden md:w-[150px] md:block md:flex-2 xl:w-[176px] xl-[32px]">
          <SocialMedia />
        </div>
      </div>

      <nav className="max-w-[1440px] mx-auto hidden xl:block xl:pt-12">
        <ul className="flex justify-between font-ttChocolates500 text-[24px] text-stone-900 leading-[111%]">
          <Link href="/">Про нас</Link>
          <Link href="#id">Послуги</Link>
          <Link href="#">Наші спеціалісти</Link>
          <Link href="#">Ціни</Link>
          <Link href="#">Відгуки</Link>
          <Link href="#">Контакти</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
