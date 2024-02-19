'use client';

import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import accordionHeaderData from '../data/accordion-header-data';
import IconPlus from './IconPlus';

export default function Accordion() {
  const [activeTab, setActiveTab] = useState<number | null>(null);

  const isMobileScreen = useMediaQuery({ query: '(max-width: 767.9px)' });
  const isTabletScreen = useMediaQuery({
    query: '(min-width: 768px) and (max-width: 1439.9px)',
  });
  const isDesktopScreen = useMediaQuery({ query: '(min-width: 1440px)' });

  const handleTabClick = (index: number) => {
    setActiveTab(activeTab === index ? null : index);
    console.log(index);
  };

  return (
    <div>
      <ul className="flex flex-col gap-16">
        {accordionHeaderData.map((item, index) => (
          <li key={index} className="overflow-x-hidden relative">
            <div className="py-[19.5px] ">
              <div className="flex justify-between items-center ">
                <h3 className="text-2xl leading-none text-stone-900">{item}</h3>

                <button onClick={() => handleTabClick(index)}>
                  <IconPlus />
                </button>
              </div>
            </div>

            {/* absolute -left-[8px] bottom-0 */}
            {/* <div className="flex gap-[23px]">
              {isMobileScreen &&
                [...Array(7)].map((_, index) => (
                  <div
                    key={index}
                    className="w-[24px] h-[1px] bg-stone-900"
                  ></div>
                ))}
              {isTabletScreen &&
                [...Array(16)].map((_, index) => (
                  <div
                    key={index}
                    className="w-[24px] h-[1px] bg-stone-900"
                  ></div>
                ))}
              {isDesktopScreen &&
                [...Array(25)].map((_, index) => (
                  <div
                    key={index}
                    className="w-[24px] h-[1px] bg-stone-900"
                  ></div>
                ))}
            </div> */}

            <div
              className={`absolute left-0 bottom-0
              ${activeTab === index ? 'block' : 'hidden'}`}
            >
              {activeTab === 0 && (
                <div className="w-full h-full bg-red-700">Жопа1</div>
              )}
              {activeTab === 1 && <div className="">Жопа2</div>}
              {activeTab === 2 && <div className="">Жопа3</div>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}