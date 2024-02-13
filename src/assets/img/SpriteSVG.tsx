export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'arrow-right':
      return (
        <svg
          fill="none"
          className="fill-current stroke-current w-full h-full"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M22.771 12.725l0.247-0.79 0.79 0.247-0.247 0.79-0.79-0.247zM10.461 20.107c-0.405 0.212-0.905 0.056-1.117-0.349s-0.056-0.905 0.349-1.117l0.768 1.466zM15.28 9.517l7.737 2.418-0.494 1.58-7.737-2.418 0.494-1.58zM23.561 12.972l-2.418 7.737-1.58-0.494 2.418-7.737 1.58 0.494zM23.155 13.458l-12.693 6.649-0.768-1.466 12.693-6.649 0.768 1.466z"
          ></path>
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
