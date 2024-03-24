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

const HeaderFixed = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isVisible = useVisibility(50);
  const toggleModal = () => setIsOpen(prev => !prev);

  return (
    <>
      <header
        className={`bg-stone-50 text-stone-900 bg-header sticky top-0 left-0 
    mx-auto px-16 py-4 z-50 ${isVisible ? 'visible' : 'hidden'}`}
      >
        <div className="max-w-[1440px] flex items-center justify-between mx-auto">
          <button
            onClick={() => setIsOpen(true)}
            type="button"
            aria-label="burger"
            className="w-10 h-10 flex-none xl:hidden md:w-16 md:h-16"
          >
            <HeaderSVG name="burgerMenu" />
          </button>
          <Logo className="w-[64px] h-[54px] md:w-[126px] md:h-[100px]" />
          <nav className="hidden xl:block">
            <ul className="flex gap-[54px] justify-between font-ttChocolates500 text-[24px] text-stone-900 leading-[111%]">
              <Link href="/">Про нас</Link>
              <Link href="#">Послуги</Link>
              <Link href="#">Наші спеціалісти</Link>
              <Link href="#">Ціни</Link>
              <Link href="#">Відгуки</Link>
              <Link href="#">Контакти</Link>
            </ul>
          </nav>
          <div className="hidden md:w-[150px] md:block xl:w-[176px] xl-[32px]">
            <SocialMedia
              wrapperClassName="flex gap-2 flex-col"
              textClassName=""
              mediaClassName=""
              mediaLinkClassName=""
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
        </div>
      </header>
      {isOpen && (
        <Modal
          isOpen={isOpen}
          onClose={toggleModal}
          contentClassName="w-screen h-screen overflow-y-auto"
        >
          <MobileMenu />
        </Modal>
      )}
    </>
  );
};

export default HeaderFixed;
