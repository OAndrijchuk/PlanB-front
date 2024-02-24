const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'plus-tablet-desktop':
      return (
        <svg className="w-full h-full" fill="none" viewBox="0 0 39 40">
          <path
            fill="#1D1C1C"
            d="M17.488 39.44V22.072H.12v-3.744h17.368V.96h3.744v17.368H38.6v3.744H21.232V39.44h-3.744Z"
          />
        </svg>
      );

    case 'minus-tablet-desktop':
      return (
        <svg className="w-full h-full" fill="none" viewBox="0 0 45 3">
          <path fill="#1D1C1C" d="M.6 3.728V.192h44.72v3.536H.6Z" />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};

export default SpriteSVG;
