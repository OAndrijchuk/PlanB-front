import Image from 'next/image';
import dulya from '../img/dulya.png';
import monkey from '../img/monkey.jpeg';
import eye from '../img/eye.png';

type ContentProps = {
  activeTab: number | null;
  index: number;
};

const images = [
  { src: dulya, alt: 'Dulya' },
  { src: monkey, alt: 'Monkey' },
  { src: eye, alt: 'Eye' },
];

export default function Content({ activeTab, index }: ContentProps) {
  return (
    <div className={`${activeTab === index ? 'block' : 'hidden'}`}>
      {images.map((image, index) => (
        <div key={index} className="flex justify-center pt-[56px] md:pt-[80px]">
          {activeTab === index && (
            <Image src={image.src} width={300} height={500} alt={image.alt} />
          )}
        </div>
      ))}
    </div>
  );
}
