import React from 'react';

type SpriteProps = {
  name?: string;
};

const HeaderSVG: React.FC<SpriteProps> = ({ name }) => {
  switch (name) {
    case 'burgerMenu':
      return (
        <svg
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 40 40"
        >
          <defs>
            <clipPath id="a">
              <path fill="#fff" fillOpacity="0" d="M0 0h40v40H0z" />
            </clipPath>
          </defs>
          <g clipPath="url(#a)">
            <path
              d="M5 10h30M5 20h30M5 30h30"
              stroke="#1D1C1C"
              strokeWidth="4"
              strokeLinejoin="round"
            />
          </g>
        </svg>
      );

    default:
      return <h2>SVG not found</h2>;
  }
};

export default HeaderSVG;
