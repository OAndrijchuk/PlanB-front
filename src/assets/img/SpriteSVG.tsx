export const SpriteSVG = ({ name }: { name: string }) => {
  switch (name) {
    case 'close':
      return (
        <svg
          viewBox="0 0 32 32"
          className="w-full h-full fill-current stroke-current"
          fill="currentColor"
        >
          <path d="m16 18.829 7.071 7.071a2.001 2.001 0 0 0 2.83-2.83l-7.073-7.071L25.9 8.928a1.986 1.986 0 0 0 .585-1.414 2.004 2.004 0 0 0-.586-1.414 1.986 1.986 0 0 0-1.414-.585 2.008 2.008 0 0 0-1.414.586l-7.069 7.071-7.071-7.071a2 2 0 1 0-2.829 2.827L13.175 16l-7.072 7.072a2.007 2.007 0 0 0-.61 1.421 2.017 2.017 0 0 0 .586 1.432 2.004 2.004 0 0 0 2.204.423c.244-.105.465-.257.649-.449l7.069-7.069z" />
        </svg>
      );

    default:
      return 'SVG not found';
  }
};
