import useMediaQueries from '@/hooks/useMediaQueries';

export default function DottedLine() {
  const { isOnMobile, isOnTablet } = useMediaQueries();

  const totalElements = isOnMobile ? 7 : isOnTablet ? 16 : 25;

  return (
    <div className="flex gap-[23px]">
      {[...Array(totalElements)].map((_, index) => (
        <div key={index} className="w-[24px] h-[1px] bg-stone-900"></div>
      ))}
    </div>
  );
}
