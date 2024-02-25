import { twMerge } from 'tailwind-merge';
import { Card } from './components';
import masters from '../Team/components/masters.json';
import { Master } from '@/types';
import { Container, SectionTitle, Section } from '@/components';

const Team = () => {
  return (
    <Section className="bg-neutral-800">
      <Container>
        <SectionTitle className="text-6xl font-caveat400 text-[56px] font-normal tracking-normal leading-12 md:text-[72px]">
          Наші спеціалісти
        </SectionTitle>

        <ul
          className="flex items-center flex-col gap-2 mt-[72px] 
      md:flex-row md:gap-1
      xl:flex-row xl:gap-8"
        >
          {masters.map((master: Master) => (
            <Card master={master} key={master.name} />
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Team;
