const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'plus-mobile':
      return (
        <svg width="34" height="33" fill="none">
          <path
            fill="#1D1C1C"
            d="M15.336 32.68V17.984H.64v-3.168h14.696V.12h3.168v14.696H33.2v3.168H18.504V32.68h-3.168Z"
          />
        </svg>
      );

    case 'plus-tablet-desktop':
      return (
        <svg width="39" height="40" fill="none">
          <path
            fill="#1D1C1C"
            d="M17.488 39.44V22.072H.12v-3.744h17.368V.96h3.744v17.368H38.6v3.744H21.232V39.44h-3.744Z"
          />
        </svg>
      );

    case 'minus-mobile':
      return (
        <svg width="39" height="4" fill="none">
          <path fill="#1D1C1C" d="M.2 3.616V.624h37.84v2.992H.2Z" />
        </svg>
      );

    case 'minus-tablet-desktop':
      return (
        <svg width="46" height="4" fill="none">
          <path fill="#1D1C1C" d="M.6 3.728V.192h44.72v3.536H.6Z" />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};

export default SpriteSVG;
