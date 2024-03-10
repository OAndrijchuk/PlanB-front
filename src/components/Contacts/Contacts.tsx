import { SpriteSVG } from '@/assets/img/SpriteSVG';
import React from 'react';

const Contacts = () => {
    return (
      <div>
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
    );
};

export default Contacts;
