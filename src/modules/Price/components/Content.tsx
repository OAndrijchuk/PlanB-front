import Image from 'next/image';

import dulya from '../img/dulya.png';
import monkey from '../img/monkey.jpeg';
import eye from '../img/eye.png';

type AccordionContentProps = {
  activeTab: number | null;
  index: number;
};

export default function Content({ activeTab, index }: AccordionContentProps) {
  return (
    <div className={`${activeTab === index ? 'block' : 'hidden'}`}>
      {activeTab === 0 && (
        <div className="flex justify-center pt-[56px] md:pt-[80px]">
          <Image src={dulya} width={300} height={500} alt="Dulya" />
        </div>
      )}
      {activeTab === 1 && (
        <div className="flex justify-center pt-[56px] md:pt-[80px]">
          <Image src={monkey} width={300} height={500} alt="Dulya" />
        </div>
      )}
      {activeTab === 2 && (
        <div className="flex justify-center pt-[56px] md:pt-[80px]">
          <Image src={eye} width={300} height={500} alt="Dulya" />
        </div>
      )}
    </div>
  );
}
