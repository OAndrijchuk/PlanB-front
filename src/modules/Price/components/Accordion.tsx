'use client';

import { useState } from 'react';

import accordionHeaderData from '../data/accordion-header-data';

import SpriteSVG from '../img/SpriteSvg';
import DottedLine from './DottedLine';
import Content from './Content';

export default function Accordion() {
  const [activeTab, setActiveTab] = useState<number | null>(null);
  const [iconStates, setIconStates] = useState<{ [key: number]: boolean }>({});

  const handleTabClick = (index: number) => {
    setActiveTab(activeTab === index ? null : index);

    setIconStates(prevStates => ({
      ...prevStates,
      [index]: !prevStates[index],
    }));

    Object.keys(iconStates).forEach(key => {
      const tabKey = parseInt(key);
      if (tabKey !== index && iconStates[tabKey]) {
        setIconStates(prevStates => ({
          ...prevStates,
          [tabKey]: false,
        }));
      }
    });
  };

  return (
    <div>
      <ul className="flex flex-col gap-16">
        {accordionHeaderData.map((item, index) => (
          <li key={index} className="relative">
            <div>
              <div className="flex justify-between items-center">
                <h3 className="text-2xl md:text-[40px] leading-none text-stone-900">
                  {item}
                </h3>

                <button
                  className="flex justify-center items-center w-[43px] h-[72px] md:w-[50px] md:h-[72px] px-1 md:px-2"
                  onClick={() => handleTabClick(index)}
                >
                  <SpriteSVG
                    name={
                      (iconStates[index] && 'minus-tablet-desktop') ||
                      'plus-tablet-desktop'
                    }
                  />
                </button>
              </div>
            </div>

            <DottedLine />
            <Content activeTab={activeTab} index={index} />
          </li>
        ))}
      </ul>
    </div>
  );
}
