const SpriteSVG = ({ name, width }: { name: string; width?: string }) => {
  switch (name) {
    case 'arrow':
      return (
        <svg width={width} height="12" fill="none" viewBox="0 0 216 12">
          <path fill="#FFF9F7" d="m0 6 10 5.774V.227L0 6Zm9 1h264V5H9v2Z" />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};

export default SpriteSVG;
